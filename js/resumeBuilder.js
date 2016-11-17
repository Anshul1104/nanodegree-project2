var bio = {
    "name": "Anshul Gupta",
    "role": "Web Developer",
    "welcomeMsg": "I am a fresher and want to be a web developer. I want to create great websites to add to my portfolio and because I love creating them.",
    "biopic": "images/fry.jpg",
    "contacts": {
        "email": "anshul.gupta36@gmail.com",
        "mobile": "+91-9818176202",
        "github": "anshul1104",
        "location": "New Delhi, India"
    },
    "skills": ["HTML", "CSS", "Bootstrap", "Hadoop", "Adobe Photoshop"]
};

var education = {
    "schools": [{
        "name": "MAPS",
        "degree": "High School",
        "dates": "2011-2012",
        "location": "New Delhi,India",
        "major": "Non-Medical"
    }, {
        "name": "BMIET",
        "degree": "BTECH",
        "dates": "2012-2016",
        "location": "New Delhi,India",
        "major": "Information Technology"
    }],
    "onlineCourses": [{
        "title": "Adobe Photoshop",
        "school": "Udemy",
        "dates": "2016",
        "url": "https://www.udemy.com/photoshop-for-web-design-beginners/"
    }, {
        "title": "HTML and CSS for Beginners",
        "school": "Udemy",
        "dates": "2016",
        "url": "https://www.udemy.com/html-and-css-for-beginners-crash-course-learn-fast-easy"
    },

                      {
                          "title": "Front-End Web UI Frameworks and Tools",
                          "school": "Coursera",
                          "dates": "2016",
                          "url": "https://www.coursera.org/learn/web-frameworks"
                      },

                      {
                          "title": "Front-End Web Developer Nanodegree",
                          "school": "Udacity",
                          "dates": "In progress",
                          "url": "https://www.udacity.com/course/nd001"
                      }
                     ]
};

var work = {
    "jobs": [{
        "employer": "Fresher",
        "title": "Web Developer",
        "dates": "in progress",
        "location": "India",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est alias, rerum iure, quam cumque minus error velit debitis possimus optio veritatis modi, sequi aspernatur cum eius recusandae perspiciatis excepturi voluptatum."
    }]
};

var projects = {
    "project": [{
        "title": "Iron Man ",
        "dates": "2008",
        "description": "When an industrialist is captured, he constructs a high-tech armoured suit to escape. Once he manages to escape, he decides to use his suit to fight against evil forces and save the world.",
        "images": ["images/1.jpg", "images/2.jpg", "images/3.jpg"]
    }, {
        "title": "Iron Man 2",
        "dates": "2010",
        "description": "Tony Stark is under pressure from various sources, including the government, to share his technology with the world. He must find a way to fight them while also tackling his other enemies.",
        "images": ["images/4.jpg", "images/5.jpg", "images/6.jpg"]
    }]
};

//////// Bio function
bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMge = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

    $("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage, formattedMge);

    $("#header").append(HTMLskillsStart);
    for (skill in bio.skills) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkills);
    }

    var formmattedContactsEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formmattedContactsMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formmattedContactsGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formmattedContactsLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formmattedContactsEmail, formmattedContactsMobile, formmattedContactsGithub, formmattedContactsLocation);
    $("#footerContacts").append(formmattedContactsEmail, formmattedContactsMobile, formmattedContactsGithub, formmattedContactsLocation);

};

///////// education function
education.display = function() {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:last").append(formattedName, formattedDegree, formattedDates, formattedLocation, formattedMajor);
    }

    //// online courses

    $("#education").append(HTMLonlineClasses);
    for (var j = 0; j < education.onlineCourses.length; j++) {
        $("#education").append('<div class="education-entry"></div>');
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url);
        $(".education-entry:last").append(formattedOnlineTitle, formattedOnlineSchool, formattedOnlineDates, formattedOnlineURL);
    }
};

///////// work function
work.display = function() {

    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

//////// project function
projects.display = function() {
    for (item in projects.project) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[item].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.project[item].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[item].description);

        $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);
        for (image in projects.project[item].images) {
            var formattedImage = HTMLprojectImage.replace("%data%", projects.project[item].images[image]);
            $(".project-entry:last").append(formattedImage);
        };
    }
};

// to internationalize the first & lastname
function inName(name) {
    name = name.split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}

bio.display();
work.display();
projects.display();
education.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
