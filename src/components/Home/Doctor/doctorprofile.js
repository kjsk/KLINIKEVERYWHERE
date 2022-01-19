import React from 'react';
import { API_ROOT } from "gatsby-env-variables";
import { isDefined, isObjectEmpty, isArrayEmpty } from '../utils/util';
import maleDoctorImage from "../data/assets/male.png";
import femaleDoctorImage from "../data/assets/female.jpeg";
import { Spin, Icon } from 'antd';
import Top from "./nav";
import 'react-toastify/dist/ReactToastify.css';
import "../styles/DoctorProfile.scss";
import { navigate } from 'gatsby-link';
import  Footer  from '../Footer';

const activeTabClassName = "active show";
const TabTypes = Object.freeze({
    OVERVIEW: Symbol("OVERVIEW"),
    CLINIC: Symbol("CLINIC"),
    BUSINESS_HOURS: Symbol("BUSINESS_HOURS"),
});

class DoctorProfile extends React.Component {
    state = {
        doctorProfile: {},
        tabContent: TabTypes.OVERVIEW,
    };

    async componentDidMount() {
        const docId = localStorage.getItem("docId");
        const orgId = localStorage.getItem("orgId");
        const requestBody = {
            docId,
            orgId
        };

        let doctorProfileData = await fetch(
            API_ROOT + "spotcare/getdoctordetail",
            {
              method: "POST",
              body: JSON.stringify(requestBody),
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            }
          )
          const doctorProfile = await doctorProfileData.json()
          this.setState({ doctorProfile });
    }

    determineTabContent = (
        profile,
        educationDetails,
        experienceDetails,
        awardDetails,
        serviceDetails,
        specializationDetails,
        clinicDetails
    ) => {
        switch(this.state.tabContent) {
            case TabTypes.CLINIC:
                return (<div role="tabpanel" className={`tab-pane fade ${activeTabClassName}`}>
                { clinicDetails.map(clinic => (
                    <div className="location-list">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="clinic-content">
                                <h5 className="clinic-name">{clinic.name}</h5>
                                <div className="clinic-details mb-0">
                                    <div className="clinic-direction">
                                        <p>
                                            <i className="fas fa-map-marker-alt"></i> {clinic.address}<br />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>);
            // case TabTypes.BUSINESS_HOURS:
            //     return (<div role="tabpanel" id="doc_business_hours" className={`tab-pane fade ${activeTabClassName}`}>
            //     <div className="row">
            //         <div className="col-md-8 mx-auto">
            //             <div className="widget business-widget">
            //                 <div className="widget-content">
            //                     <div className="listing-hours">
            //                         <div className="listing-day current">
            //                             <div className="day">Today <span>5 Nov 2019</span></div>
            //                             <div className="time-items">
            //                                 <span className="open-status"><span className="badge bg-success-light">Open Now</span></span>
            //                                 <span className="time">07:00 AM - 09:00 PM</span>
            //                             </div>
            //                         </div>
            //                         <div className="listing-day">
            //                             <div className="day">Monday</div>
            //                             <div className="time-items">
            //                                 <span className="time">07:00 AM - 09:00 PM</span>
            //                             </div>
            //                         </div>
            //                         <div className="listing-day">
            //                             <div className="day">Tuesday</div>
            //                             <div className="time-items">
            //                                 <span className="time">07:00 AM - 09:00 PM</span>
            //                             </div>
            //                         </div>
            //                         <div className="listing-day">
            //                             <div className="day">Wednesday</div>
            //                             <div className="time-items">
            //                                 <span className="time">07:00 AM - 09:00 PM</span>
            //                             </div>
            //                         </div>
            //                         <div className="listing-day">
            //                             <div className="day">Thursday</div>
            //                             <div className="time-items">
            //                                 <span className="time">07:00 AM - 09:00 PM</span>
            //                             </div>
            //                         </div>
            //                         <div className="listing-day">
            //                             <div className="day">Friday</div>
            //                             <div className="time-items">
            //                                 <span className="time">07:00 AM - 09:00 PM</span>
            //                             </div>
            //                         </div>
            //                         <div className="listing-day">
            //                             <div className="day">Saturday</div>
            //                             <div className="time-items">
            //                                 <span className="time">07:00 AM - 09:00 PM</span>
            //                             </div>
            //                         </div>
            //                         <div className="listing-day closed">
            //                             <div className="day">Sunday</div>
            //                             <div className="time-items">
            //                                 <span className="time"><span className="badge bg-danger-light">Closed</span></span>
            //                             </div>
            //                         </div>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>);
            default:
                return (<div role="tabpanel" className={`tab-pane fade ${activeTabClassName}`}>
                <div className="row">
                    <div className="col-12">
                        <div className="widget about-widget">
                            <h5 className="widget-title">About Me</h5>
                            <p>{profile.bio}</p>
                        </div>
        
                        { educationDetails.length > 0 ? (
                            <div className="widget education-widget">
                            <h5 className="widget-title">Education</h5>
                            <div className="experience-box">
                            <ul className="experience-list">
                                {educationDetails.map(education => (
                                    <li>
                                    <div className="experience-user">
                                        <div className="before-circle"></div>
                                    </div>
                                    <div className="experience-content">
                                        <div className="timeline-content">
                                        <p  className="name">{education.university}</p>
                                        <div>{education.degree}</div>
                                        <span className="time">{education.startDate | 'yyyy'} - {education.endDate | 'yyyy'}</span>
                                        </div>
                                    </div>
                                    </li>
                                ))}
                            </ul>
                            </div>
                        </div>
                        ) : null }
        
                        { experienceDetails.length > 0 ? (<div className="widget experience-widget">
                        <h5 className="widget-title">Work &amp; Experience</h5>
                        <div className="experience-box">
                            <ul className="experience-list">
                                {experienceDetails.map(experience => (
                                    <li>
                                        <div className="experience-user">
                                        <div className="before-circle"></div>
                                        </div>
                                        <div className="experience-content">
                                        <div className="timeline-content">
                                            <p  className="name">{experience.organisation}</p>
                                            <span className="time">{experience.startDate | 'yyyy'} - {experience.endDate | 'yyyy'}</span>
                                        </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        </div>) : null }
            
        
                        { awardDetails.length > 0 ? (
                            <div className="widget awards-widget">
                                <h5 className="widget-title">Awards</h5>
                                <div className="experience-box">
                                    <ul className="experience-list">
                                        { awardDetails.map(award => (
                                            <li>
                                                <div className="experience-user">
                                                    <div className="before-circle"></div>
                                                </div>
                                                <div className="experience-content">
                                                    <div className="timeline-content">
                                                        <p className="exp-year">{award.date | 'MMM yyyy'}</p>
                                                        <h6 className="exp-title">{award.title}</h6>
                                                        <p>{award.description}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            ) : null
                        }
            
                        { serviceDetails.length > 0 ? (
                            <div className="service-list">
                                <h5>Services</h5>
                                <ul className="clearfix">
                                    {serviceDetails.map(service => <li>{service.name}</li>)}
                                </ul>
                            </div>
                            ) : null
                        }
            
                        { specializationDetails.length > 0 ? (
                            <div className="service-list">
                                <h5>Specializations</h5>
                                <ul className="clearfix">
                                    {specializationDetails.map(specialization => <li>{specialization.name}</li>)}
                                </ul>
                            </div>
                            ) : null
                        }
                    </div>
                </div>
            </div>);
        }
    }

    render() {
        const { doctorProfile } = this.state;
        const antIcon = <Icon type="loading" style={{ fontSize: 50 }} spin />
        if (isDefined(doctorProfile) && isObjectEmpty(doctorProfile))  {
            return (
                <div style={{ textAlign: 'center', margin: '20%' }}>
                    <Spin tip="Loading..." indicator={antIcon} />
                </div>
            );
        }

        const profile = doctorProfile.profile[0];
        const educationDetails = !isArrayEmpty(doctorProfile.education) ? doctorProfile.education: [];
        const experienceDetails = !isArrayEmpty(doctorProfile.experience) ? doctorProfile.experience: [];
        const awardDetails = !isArrayEmpty(doctorProfile.award) ? doctorProfile.award: [];
        const serviceDetails = !isArrayEmpty(doctorProfile.service) ? doctorProfile.service: [];
        const specializationDetails = !isArrayEmpty(doctorProfile.specialization) ? doctorProfile.specialization: [];
        const clinicDetails = !isArrayEmpty(doctorProfile.clinic) ? doctorProfile.clinic: [];
        let genderBasedImage = null;
        switch (profile.gender) {
            case "Male":
            case "M":
            case "m":
            case "male":
                genderBasedImage = maleDoctorImage;
                break;
            case "Female":
            case "F":
            case "f":
            case "female":
                genderBasedImage = femaleDoctorImage;
                break;
            default:
                break;
        }

        const image = isDefined(profile.imgpath) ? profile.imgpath : genderBasedImage;

        return (
            <div id="doctorProfile">
                <Top />
                <div id="doctorprofile_container_main">
                    <div className="container mt-5 details-doctor">
                        <div className="row">
                            <div className="col-lg-4 col-sm-4 col-12">
                                <div>
                                    <div className="card card-cascade wider mt-5 mb-3">
                                        <img className="team-img p-2" src={image} alt="Card image cap" />
                                        <div className="card-body card-body-cascade text-center" style={{ alignSelf: "center" }}>
                                            <div className="doctor-title">
                                                <div>
                                                    <h5 className="card-title mb-1"><strong>Dr. {profile.name}</strong></h5>
                                                    <p className="card-text text-info mb-1">{profile.usertype}</p>
                                                </div>
                                                <a style={{ alignSelf: "center", marginLeft: "1em", fontSize: "large" }}>
                                                    <span><i className="fas fa-calendar-alt"></i></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card card-cascade wider mt-3 mb-3">
                                        <div className="card-body card-body-cascade">
                                            <h6 className="font-weight-bold text-info">Contact Information</h6>
                                            <p>
                                            <label className="w-25 text-info font-weight-bold">Phone:</label>
                                            {profile.phone}
                                            </p>
                                            <p>
                                            <label className="w-25 text-info font-weight-bold">Email:</label>
                                            {profile.email}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-8 col-sm-8 col-12">
                                <div className="doctor-detail mt-5">
                                    <div className="card">
                                        <div className="card-body pt-0">
                                            <nav className="user-tabs mb-4">
                                                <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                                                    <li className="nav-item">
                                                        <a className="nav-link" onClick={() => this.setState({ tabContent: TabTypes.OVERVIEW })}>Overview</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" onClick={() => this.setState({ tabContent: TabTypes.CLINIC })}>Clinic</a>
                                                    </li>
                                                    {/* <li className="nav-item">
                                                        <a className="nav-link" onClick={() => this.setState({ tabContent: TabTypes.BUSINESS_HOURS })}>Business Hours</a>
                                                    </li> */}
                                                </ul>
                                            </nav>

                                            <div className="tab-content">
                                                {this.determineTabContent(
                                                    profile,
                                                    educationDetails,
                                                    experienceDetails,
                                                    awardDetails,
                                                    serviceDetails,
                                                    specializationDetails,
                                                    clinicDetails
                                                    )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="doctor-detail mt-5">
                                    <h3 className="font-weight-bold"> </h3>
                                    <button className="btn btn-primary" onClick={() => navigate('/bookappointment')}>Book Appointment</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        );
    }
};

export default DoctorProfile;