import type { Course } from "./types";
import class1 from "../../../assets/images/class1.png";

export const courses: Course[] = [
  {
    slug: "understanding-faith",
    title: "Understanding Faith",
    subtitle: "There comes a time when faith must move beyond inspiration and become action.",
    description:
      "This course was curated for those who are truly desiring to grow and go deeper in the Word of God. We will seek to understand what Faith really is according to Scripture — and engage fully with how it transforms every area of life. Only for those ready to move beyond inspiration into conviction.",
    instructor: "Lilian",
    instructorRole: "Lead Teacher · Mind & Wholeness Institute",
    thumbnail: class1,
    students: 8,
    date: "Tuesday, 3rd March 2026",
    format: "Online Classes",
    contact: "+91 96242 89864",
    seatsLeft: 5,
    lessons: [
      { title: "What is Faith? — A Biblical Foundation", duration: "20 min" },
      { title: "Faith Beyond Inspiration — Moving into Action", duration: "22 min" },
      { title: "Faith, Revelation & Spiritual Maturity", duration: "25 min" },
      { title: "Building Unshakable Spiritual Conviction", duration: "23 min" },
      { title: "Going Deeper in the Word of God", duration: "20 min" },
    ],
    topics: ["Faith", "Scripture", "Spiritual Conviction", "Revelation", "Maturity"],
  },
];
