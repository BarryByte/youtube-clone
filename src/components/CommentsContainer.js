import React from "react";
import profileIcon from "../assets/profile.svg";
const commentsData = [
  {
    name: "Alice Johnson",
    text: "This is a fascinating article on software architecture!",
    replies: [
      {
        name: "Bob Smith",
        text: "I agree with you, Alice. The section on modular design stood out to me.",
        replies: [
          {
            name: "Charlie Brown",
            text: "Modular design is indeed important. Have you tried implementing it with microservices?",
            replies: [
              {
                name: "Alice Johnson",
                text: "Yes, I have! It works great, but you need to handle inter-service communication carefully.",
                replies: [
                  {
                    name: "Eve Williams",
                    text: "Exactly! I’ve faced issues with service discovery before. Using tools like Kubernetes helps.",
                  },
                  {
                    name: "Frank Taylor",
                    text: "Kubernetes is powerful, but sometimes it's overkill for small projects.",
                    replies: [
                      {
                        name: "Grace Lee",
                        text: "True, but learning it is a valuable skill in today’s market.",
                      },
                      {
                        name: "Hank Moore",
                        text: "Agreed. Plus, it prepares you for scaling challenges in the future.",
                        replies: [
                          {
                            name: "Ivy Carter",
                            text: "Scaling challenges are easier to tackle when you plan for them early on.",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "Diana Evans",
            text: "I prefer monolithic architectures for simpler projects. They’re easier to manage.",
            replies: [
              {
                name: "Bob Smith",
                text: "That’s a valid point. Simplicity often wins in small-scale applications.",
              },
            ],
          },
        ],
      },
      {
        name: "Emily Davis",
        text: "I found the section on testing strategies particularly useful.",
        replies: [
          {
            name: "Frank Taylor",
            text: "Automated testing is a game-changer. What tools do you use?",
            replies: [
              {
                name: "Emily Davis",
                text: "I mostly use Jest for unit tests and Cypress for end-to-end testing.",
                replies: [
                  {
                    name: "Grace Lee",
                    text: "Cypress is fantastic! It’s been a great addition to our workflow.",
                  },
                ],
              },
              {
                name: "Hank Moore",
                text: "I’d recommend Playwright as well. It’s versatile and powerful.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Ivy Carter",
    text: "Does anyone know good resources for learning about CI/CD pipelines?",
    replies: [
      {
        name: "Jack Hill",
        text: "Check out DevOps Roadmap on GitHub. It’s a great starting point.",
      },
      {
        name: "Karen Adams",
        text: "I also recommend tutorials on Docker and Jenkins to get a hands-on understanding.",
        replies: [
          {
            name: "Leo Martin",
            text: "Once you’re comfortable with Docker, Kubernetes is the logical next step.",
            replies: [
              {
                name: "Mia Scott",
                text: "Agreed! Setting up a CI/CD pipeline with Kubernetes is a valuable skill.",
                replies: [
                  {
                    name: "Noah Reed",
                    text: "Plus, it’s a great way to ensure consistent deployments across environments.",
                  },
                  {
                    name: "Olivia Young",
                    text: "Don’t forget about security! Tools like Aqua can help secure your containers.",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Paul Turner",
    text: "This discussion is amazing! It’s great to see so many perspectives.",
    replies: [
      {
        name: "Quinn White",
        text: "Absolutely! Discussions like these are what make learning fun.",
        replies: [],
      },
    ],
  },
  {
    name: "Rachel Lewis",
    text: "Thanks for posting this! It’s sparked so many interesting ideas for me.",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex rounded-lg shadow-lg bg-gray-200 p-2 mb-1">
      <img alt="profle-icon" src={profileIcon} height={30} width={30} />
      <div className="px-3">
        <p className="font-semibold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  if (!comments || comments.length === 0) return null;
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies}/>
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments : </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
