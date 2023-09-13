// returns the job listing data

var imageLink = "https://scontent.fsin10-1.fna.fbcdn.net/v/t1.18169-9/14523255_10153756066867511_8425294465157458923_n.png?stp=dst-png_p320x320&_nc_cat=104&ccb=1-7&_nc_sid=85a577&_nc_ohc=1-cSp2jyd6QAX9BpLDm&_nc_ht=scontent.fsin10-1.fna&oh=00_AfARW39Jx2l2XxX_NhI0VY3Z-tXDyieSwgqqi5RBuIh9MQ&oe=65265FDE"

function getData() {
	return [
		{
			job_index: 0,
			organisation_img: imageLink,
			organisation_name: "GovTech",
			organisation_rating: 4,
			job_title: "Technical Product Manager (Cloud)",
			job_type: "PM",
			skills: ["play", "IAM"],
			job_posting_date_time: "less than a minute ago",
			job_country_location: "Singapore",
			job_monthly_pay_range: null,
		},
		{
			job_index: 1,
			organisation_img: imageLink,
			organisation_name: "Coupang",
			organisation_rating: 3.9,
			job_title: "Staff, Back-end Engineer (Coupang Play)",
			job_type: "Backend",
			skills: ["Rest API", "API", "play", "Modular", "Node.js"],
			job_posting_date_time: "37 minutes ago",
			job_country_location: "Singapore",
			job_monthly_pay_range: "S$12,500 - S$20,250",
		},
		{
			job_index: 2,
			organisation_img: imageLink,
			organisation_name: "Embed",
			organisation_rating: 3.5,
			job_title: "Senior Software Engineer (.Net)",
			job_type: "Fullstack",
			skills: ["Rest API", "Docker", "API", "TDD", "JavaScript"],
			job_posting_date_time: "about 1 hour ago",
			job_country_location: "Singapore",
			job_monthly_pay_range: null,
		},
		{
			job_index: 3,
			organisation_img: imageLink,
			organisation_name: "Circles.Life",
			organisation_rating: 3,
			job_title: "Principal Engineer, Senior Position",
			job_type: "Cybersec Eng",
			skills: ["Rest API", "Docker", "API", "TDD", "JavaScript"],
			job_posting_date_time: "3 dats ago",
			job_country_location: "Singapore",
			job_monthly_pay_range: "S$10,000 - S$20,000",
		}
	]
}

export default getData