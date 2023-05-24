const formElement = document.querySelector("[data-cv-form]");

let fname;
let lname;
let mobileNo;
let mailId;
let websiteName;
let homeAddress;
let oneLiner;
let instagram,
  linkedin,
  github,
  skills,
  company_1,
  company_2,
  company_3,
  companies,
  hobbies;

// Reference form elements
const experiencesElement = document.querySelector(
  "[data-form-experiences-wrapper]"
);
const experiencesNo = document.querySelector("[data-form-experiences-no]");

// CV Template elements
const cvFirstName = document.querySelector("[data-cv-fname]");
const cvLastName = document.querySelector("[data-cv-lname]");
const cvMobileNumber = document.querySelector("[data-cv-mobileno]");
const cvMailId = document.querySelector("[data-cv-mailid]");
const cvWebsite = document.querySelector("[data-cv-website]");
const cvAddress = document.querySelector("[data-cv-address]");
const cvOnliner = document.querySelector("[data-cv-oneliner]");
const cvInstagram = document.querySelector("[data-cv-instagram]");
const cvLinkedIn = document.querySelector("[data-cv-linkedin]");
const cvGithub = document.querySelector("[data-cv-github]");

// Professions elements
// Company name
const cvCompanyName1 = document.querySelector("[data-cv-company-name-1]");
const cvCompanyName2 = document.querySelector("[data-cv-company-name-2]");
const cvCompanyName3 = document.querySelector("[data-cv-company-name-3]");
// Company duration
const cvCompanyTime1 = document.querySelector("[data-cv-company-time-1]");
const cvCompanyTime2 = document.querySelector("[data-cv-company-time-2]");
const cvCompanyTime3 = document.querySelector("[data-cv-company-time-3]");
// Profession title
const cvProfession1 = document.querySelector("[data-cv-profession-1]");
const cvProfession2 = document.querySelector("[data-cv-profession-2]");
const cvProfession3 = document.querySelector("[data-cv-profession-3]");
// Company description
const cvCompanyDescription1 = document.querySelector(
  "[data-cv-company-description-1]"
);
const cvCompanyDescription2 = document.querySelector(
  "[data-cv-company-description-2]"
);
const cvCompanyDescription3 = document.querySelector(
  "[data-cv-company-description-3]"
);

// Skill names
const cvSkill1 = document.querySelector("[data-skill-1]");
const cvSkill2 = document.querySelector("[data-skill-2]");
const cvSkill3 = document.querySelector("[data-skill-3]");
const cvSkill4 = document.querySelector("[data-skill-4]");
const cvSkill5 = document.querySelector("[data-skill-5]");
const cvSkill6 = document.querySelector("[data-skill-6]");

// Hobbies
const cvHobbies = document.querySelector("[data-cv-hobbies]");

if (formElement !== null) {
  formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;
    fname = form.fname.value;
    lname = form.lname.value;
    mobileNo = form.mobile_no.value;
    mailId = form.mail_id.value;
    websiteName = form.website_name.value;
    homeAddress = form.home_addr.value;
    oneLiner = form.oneliner.value;
    instagram = form.instagram_name.value;
    linkedin = form.linkedin_name.value;
    github = form.github_name.value;
    company_1 = JSON.stringify({
      cn: form.company_name_1.value,
      ct: form.company_time_1.value,
      cp: form.company_profession_1.value,
      cd: form.company_description_1.value,
    });
    company_2 = JSON.stringify({
      cn: form.company_name_2.value,
      ct: form.company_time_2.value,
      cp: form.company_profession_2.value,
      cd: form.company_description_2.value,
    });
    company_3 = JSON.stringify({
      cn: form.company_name_3.value,
      ct: form.company_time_3.value,
      cp: form.company_profession_3.value,
      cd: form.company_description_3.value,
    });
    skills = JSON.stringify({
      s1: JSON.stringify({
        sn: form.skill_1.value,
        sr: form.skill_rating_1.value,
      }),
      s2: JSON.stringify({
        sn: form.skill_2.value,
        sr: form.skill_rating_2.value,
      }),
      s3: JSON.stringify({
        sn: form.skill_3.value,
        sr: form.skill_rating_3.value,
      }),
      s4: JSON.stringify({
        sn: form.skill_4.value,
        sr: form.skill_rating_4.value,
      }),
      s5: JSON.stringify({
        sn: form.skill_5.value,
        sr: form.skill_rating_5.value,
      }),
      s6: JSON.stringify({
        sn: form.skill_6.value,
        sr: form.skill_rating_6.value,
      }),
    });
    hobbies = form.hobbies.value;

    // Add these to session storage
    sessionStorage.setItem("fname", fname);
    sessionStorage.setItem("lname", lname);
    sessionStorage.setItem("mobileNo", mobileNo);
    sessionStorage.setItem("mailId", mailId);
    sessionStorage.setItem("websiteName", websiteName);
    sessionStorage.setItem("homeAddress", homeAddress);
    sessionStorage.setItem("oneLiner", oneLiner);
    sessionStorage.setItem("instagram", instagram);
    sessionStorage.setItem("linkedin", linkedin);
    sessionStorage.setItem("github", github);
    sessionStorage.setItem(
      "companies",
      JSON.stringify({ company_1, company_2, company_3 })
    );
    sessionStorage.setItem("skills", skills);
    sessionStorage.setItem("hobbies", hobbies);

    window.location = "/cv.html";
  });
}

if (cvFirstName !== null) {
  fname = sessionStorage.getItem("fname");
  lname = sessionStorage.getItem("lname");
  mobileNo = sessionStorage.getItem("mobileNo");
  mailId = sessionStorage.getItem("mailId");
  websiteName = sessionStorage.getItem("websiteName");
  homeAddress = sessionStorage.getItem("homeAddress");
  oneLiner = sessionStorage.getItem("oneLiner");
  linkedin = sessionStorage.getItem("linkedin");
  instagram = sessionStorage.getItem("instagram");
  github = sessionStorage.getItem("github");
  companies = JSON.parse(sessionStorage.getItem("companies"));
  company_1 = JSON.parse(companies.company_1);
  company_2 = JSON.parse(companies.company_2);
  company_3 = JSON.parse(companies.company_3);
  skills = JSON.parse(sessionStorage.getItem("skills"));
  hobbies = sessionStorage.getItem("hobbies");
  let s1 = JSON.parse(skills.s1);
  let s2 = JSON.parse(skills.s2);
  let s3 = JSON.parse(skills.s3);
  let s4 = JSON.parse(skills.s4);
  let s5 = JSON.parse(skills.s5);
  let s6 = JSON.parse(skills.s6);

  let skill1 = document.querySelector(
    ".section-wrapper .skill-percentage:nth-child(1)"
  );
  let skill2 = document.querySelector(
    ".section-wrapper .skill-percentage:nth-child(2)"
  );
  let skill3 = document.querySelector(
    ".section-wrapper .skill-percentage:nth-child(3)"
  );
  let skill4 = document.querySelector(
    ".section-wrapper .skill-percentage:nth-child(4)"
  );
  let skill5 = document.querySelector(
    ".section-wrapper .skill-percentage:nth-child(5)"
  );
  let skill6 = document.querySelector(
    ".section-wrapper .skill-percentage:nth-child(6)"
  );

  console.log(skill1);
  window.addEventListener("load", (e) => {
    cvFirstName.textContent = fname;
    cvLastName.textContent = lname;
    cvMobileNumber.textContent = mobileNo;
    cvMailId.textContent = mailId;
    cvWebsite.textContent = websiteName;
    cvAddress.textContent = homeAddress;
    cvOnliner.textContent = oneLiner;
    cvLinkedIn.textContent = linkedin;
    cvInstagram.textContent = instagram;
    cvGithub.textContent = github;
    cvCompanyName1.textContent = company_1.cn;
    cvCompanyTime1.textContent = company_1.ct + " years";
    cvProfession1.textContent = company_1.cp;
    cvCompanyDescription1.textContent = company_1.cd;
    cvCompanyName2.textContent = company_2.cn;
    cvCompanyTime2.textContent = company_2.ct + " years";
    cvProfession2.textContent = company_2.cp;
    cvCompanyDescription2.textContent = company_2.cd;
    cvCompanyName3.textContent = company_3.cn;
    cvCompanyTime3.textContent = company_3.ct + " years";
    cvProfession3.textContent = company_3.cp;
    cvCompanyDescription3.textContent = company_3.cd;
    cvSkill1.textContent = s1.sn;
    cvSkill2.textContent = s2.sn;
    cvSkill3.textContent = s3.sn;
    cvSkill4.textContent = s4.sn;
    cvSkill5.textContent = s5.sn;
    cvSkill6.textContent = s6.sn;
    skill1.style.setProperty("--cw-1", s1.sr + "%");
    skill2.style.setProperty("--cw-2", s2.sr + "%");
    skill3.style.setProperty("--cw-3", s3.sr + "%");
    skill4.style.setProperty("--cw-4", s4.sr + "%");
    skill5.style.setProperty("--cw-5", s5.sr + "%");
    skill6.style.setProperty("--cw-6", s6.sr + "%");
    cvHobbies.textContent = hobbies;
  });
}
