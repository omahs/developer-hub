import Link from "@docusaurus/Link";
import { useHistory, useLocation } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { certType } from "./CertCard";
import { ActivePage, getCertLevel } from "./LandingPage";
import AdminCertificationExamDetails from "./data/sto-certification-admin-exam-details.md";
import AdminCertificationReviewDetails from "./data/sto-certification-admin-review-guide.md";
import DeveloperCertificationExamDetails from "./data/sto-certification-developer-exam-details.md";
import DeveloperCertificationReviewGuide from "./data/sto-certification-developer-review-guide.md";
// import ArchitectCertificationReviewDetails from "./data/sto-certification-architect-review-guide.md";
// import ArchitectCertificationExamDetails from "./data/sto-certification-architect-exam-details.md";
import IltCard from "./Card";
import { ilt } from "./data/iltData";
import { spt } from "./data/sptData";
import styles from "./styles.module.scss";
const getCertBadges = (url: string) => [
  {
    img: `${url}img/cert_dev_sto_badge.svg`,
    alt: "Harness Certified Expert - Developer",
    type: certType.developer,
  },
  {
    img: `${url}img/cert_adm_sto_badge.svg`,
    alt: "Harness Certified Expert - Administrator",
    type: certType.administrator,
  },
  {
    img: `${url}img/cert_arc_sto_badge.svg`,
    alt: "Harness Certified Expert - Architect",
    type: certType.architect,
  },
];

export default function CertificationsSTO() {
  const { siteConfig: { baseUrl = "/" } = {} } = useDocusaurusContext();
  // React router provides the current component's route, even in SSR
  const location = useLocation();
  const history = useHistory();
  const { pathname = "/", search = "" } = location;
  const searchKey = getCertLevel(search);
  const [tab, setTab] = useState("developer");
  const handleSwitchTab = (tabKey) => {
    setTab(tabKey);
    if (pathname && tabKey) {
      history.push(`${pathname}?lvl=${tabKey}`);
    }
  };

  const certBadges = getCertBadges(baseUrl);

  useEffect(() => {
    if (searchKey) {
      setTab(searchKey);
    }
  }, [searchKey]);

  useEffect(() => {
    if (location.search === "?ilt") {
      setActivePage(ActivePage.InstructorLedTraining);
    }
    if (location.search === "?spt") {
      setActivePage(ActivePage.SelfPacedTraning);
    }
  }, []);

  const [activePage, setActivePage] = useState<string>(
    ActivePage.Certifications
  );
  const handleCertficationClick = () => {
    history.push(`${pathname}?lvl=developer`);
    setActivePage(ActivePage.Certifications);
  };
  const handleInstLedTrainClick = () => {
    history.push(`${pathname}?ilt`);
    setActivePage(ActivePage.InstructorLedTraining);
  };
  const handleSelfPacedTrainingClick = () => {
    history.push(`${pathname}?spt`);
    setActivePage(ActivePage.SelfPacedTraning);
  };

  return (
    <div className={styles.certificationsSTO}>
      <div className={styles.hero}>
        <div className={styles.left}>
          <div className={styles.linkBack}>
            <Link to={`${baseUrl}university`}>
              <i className="fa-solid fa-arrow-left"></i> Back to University Home
            </Link>
          </div>
          <h1>Security Testing Orchestration</h1>
          <div>
            Seamlessly integrate security scanners and orchestrate tests
            anywhere across your build pipelines. Enable developers to rapidly
            remediate vulnerabilities through intelligent prioritization and
            deduplication.
          </div>
        </div>
        <div className={styles.right}>
          {certBadges.map((badge) => (
            <img
              src={badge.img}
              alt={badge.alt}
              className={badge.type === certType[tab] ? styles.active : ""}
            />
          ))}
        </div>
      </div>
      <div className={styles.btns}>
        <button
          className={`${styles.certBtn} ${
            activePage === ActivePage.Certifications ? styles.active : ""
          }`}
          onClick={handleCertficationClick}
        >
          {activePage !== ActivePage.Certifications ? (
            <img src="/img/certification_icon_unactive.svg" />
          ) : (
            <img src="/img/certification_icon.svg" />
          )}
          Certifications
        </button>

        <button
          onClick={handleInstLedTrainClick}
          className={`${styles.InstLedTrainBtn} ${
            activePage === ActivePage.InstructorLedTraining ? styles.active : ""
          }`}
        >
          {activePage === ActivePage.InstructorLedTraining ? (
            <img src="/img/Instructor_led_trainin_logo_unactive.svg" />
          ) : (
            <img src="/img/Instructor_led_trainin_logo.svg" />
          )}
          Instructor-Led Training
        </button>
        <button
          onClick={handleSelfPacedTrainingClick}
          className={`${styles.InstLedTrainBtn} ${
            activePage === ActivePage.SelfPacedTraning ? styles.active : ""
          }`}
        >
          {activePage === ActivePage.SelfPacedTraning ? (
            <img src="/img/self-paced-training-logo-inactive.svg" />
          ) : (
            <img src="/img/self-paced-training-logo-active.svg" />
          )}
          Self-Paced Training
        </button>
      </div>

      {/* Tab Content */}
      {activePage === ActivePage.Certifications && (
        <div className={styles.tabs}>
          <h2>Certifications</h2>
          <ul className={styles.tabItems}>
            {Object.entries(certType).map(([tabKey, tabVal], index) => (
              <div className={styles.listTabItems}>
                <li
                  key={tabKey}
                  className={tab === tabKey ? styles.active : ""}
                  onClick={() => handleSwitchTab(tabKey)}
                >
                  For {tabVal}
                </li>
                {index < 2 && <i className="fa-solid fa-chevron-right"></i>}
              </div>
            ))}
          </ul>

          {/* Developer Tab Content */}
          <div
            className={clsx(
              styles.tabContent,
              certType[tab] === certType.developer && styles.active
            )}
          >
            {/* Developer Study Guide */}
            <div className={styles.studyGuide}>
              <h2 id="prepare">Prepare for the Exam</h2>
              <div
                className={clsx(
                  styles.studyGuideCard,
                  styles[certType.developer]
                )}
              >
                <div className={styles.info}>
                  <i className="fa-solid fa-circle-info"></i>
                  <strong>Get Certified</strong> | Harness Expert
                </div>
                <div className={styles.innerCard}>
                  <div className={styles.left}>
                    <h2>Security Testing Orchestration - Developer</h2>
                    <img
                      src={`${baseUrl}img/cert_dev_sto_badge.svg`}
                      alt="Harness Certified Expert - STO Engineering Developer"
                      className={styles.badge}
                    />
                    <span className={styles.productVersion}>
                      <strong>Product version: </strong> Security Testing
                      Orchestration Free/Team Plans
                    </span>
                  </div>
                  <div className={styles.right}>
                    <h3>Review Study Guide</h3>
                    <div className={styles.desc}>
                      Assesses the fundamental skills to deploy your
                      applications with STO projects.
                    </div>
                    <DeveloperCertificationReviewGuide />
                    <div className={styles.btnContainer}>
                      <Link href="https://university-registration.harness.io/security-testing-orchestration-developer">
                        <button className={styles.moreDetails}>
                          Register for Exam
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Developer Exam Details */}
            <div className={styles.examDetails}>
              <h2 id="exam-details">Exam Details</h2>
              <div className={styles.examDetailsCard}>
                <DeveloperCertificationExamDetails />
                <div className={styles.btnContainer}>
                  <Link href="https://university-registration.harness.io/security-testing-orchestration-developer">
                    <button className={styles.moreDetails}>
                      Register for Exam
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Administrator Tab Content */}
          <div
            className={clsx(
              styles.tabContent,
              certType[tab] === certType.administrator && styles.active
            )}
          >
            <div className={styles.studyGuide}>
              <h2 id="prepare">Prepare for the Exam</h2>
              <div
                className={clsx(
                  styles.studyGuideCard,
                  styles[certType.administrator]
                )}
              >
                <div className={styles.info}>
                  <i className="fa-solid fa-circle-info"></i>
                  <strong>Get Certified</strong> | Harness Expert
                </div>
                <div className={styles.innerCard}>
                  <div className={styles.left}>
                    <h2>Security Testing Orchestration - Administrator </h2>
                    <img
                      src={`${baseUrl}img/cert_adm_sto_badge.svg`}
                      alt="Harness Certified Expert - STO Administrator"
                      className={styles.badge}
                    />
                    <span className={styles.productVersion}>
                      <strong>Product version: </strong> Security Testing
                      Orchestration Enterprise Plan
                    </span>
                  </div>
                  <div className={styles.right}>
                    <h3>Review Study Guide </h3>
                    <div className={styles.desc}>
                      Assesses the fundamental skills to deploy and maintain STO
                      Engineering projects and the overall Harness Platform.
                      This exam builds upon the{" "}
                      <a href="/university/sto?lvl=developer">
                        STO Developer Certification
                      </a>
                      .
                    </div>
                    <AdminCertificationReviewDetails />
                    <div className={styles.btnContainer}>
                      <Link href="https://university-registration.harness.io/security-testing-orchestration-administrator">
                        <button className={styles.moreDetails}>
                          Register for Exam
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Admin Exam Details */}
            <div className={styles.examDetails}>
              <h2 id="exam-details">Exam Details </h2>
              <div className={styles.examDetailsCard}>
                <AdminCertificationExamDetails />
                <div className={styles.btnContainer}>
                  <Link href="https://university-registration.harness.io/security-testing-orchestration-administrator">
                    <button className={styles.moreDetails}>
                      Register for Exam
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Architect Tab Content */}
          <div
            className={clsx(
              styles.tabContent,
              certType[tab] === certType.architect && styles.active
            )}
          >
            <div className={styles.studyGuide}>
              <h2 id="prepare">Prepare for the Exam</h2>
              <div
                className={clsx(
                  styles.studyGuideCard,
                  styles[certType.architect]
                )}
              >
                <div className={styles.info}>
                  <i className="fa-solid fa-circle-info"></i>
                  <strong>Get Certified</strong> | Harness Expert
                </div>
                <div className={styles.innerCard}>
                  <div className={styles.left}>
                    <h2>
                      Security Testing Orchestration - Architect (BETA COMING
                      SOON)
                    </h2>
                    <img
                      src={`${baseUrl}img/cert_arc_sto_badge.svg`}
                      alt="Harness Certified Expert - STO Architect"
                      className={styles.badge}
                    />
                    <span className={styles.productVersion}>
                      <strong>Product version: </strong> Security Testing
                      Orchestration Enterprise Plan
                    </span>
                  </div>
                  <div className={styles.right}>
                    <h3>Coming Soon...</h3>
                    <div className={styles.desc}>
                      Assess key technical job functions and advanced skills in
                      design, implementation and management of STO.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activePage === ActivePage.InstructorLedTraining && (
        <div className={styles.tabs}>
          <h2>Instructor-Led Training</h2>
          <p>
            Intensive two-day course is designed for engineers looking to deepen
            their understanding and expertise.
          </p>
          <div className={clsx(styles.tabContent, styles.active)}>
            <div className={styles.cardContainer}>
              {ilt
                .filter((ilt) => {
                  return (
                    ilt.tileType === "pre requisite" ||
                    ilt.module === "sto" ||
                    (ilt.module === "sto" && ilt.tileType === "comming soon")
                  );
                })

                .map((ilt) => (
                  <IltCard {...ilt} />
                ))}
            </div>
          </div>
        </div>
      )}
      {activePage === ActivePage.SelfPacedTraning && (
        <div className={styles.tabs}>
          <h2>Self-Paced Training</h2>
          <p>
            Self-paced courses that you can consume on your own time in a webinar style.
          </p>
          <div className={clsx(styles.tabContent, styles.active)}>
            <div className={styles.cardContainer}>
              {spt
                .filter((spt) => {
                  return spt.tileType === "pre requisite";
                })
                .map((spt) => (
                  <IltCard {...spt} />
                ))}
              {spt
                .filter((spt) => {
                  return (
                    spt.module === "sto" && spt.cardType === "SPT" ||
                    (spt.module === "sto" && spt.tileType === "comming soon")
                  );
                })
                .map((spt) => (
                  <IltCard {...spt} />
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
