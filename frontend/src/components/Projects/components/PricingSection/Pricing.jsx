import PriceCard from "./PriceCard";

const Pricing = ({ openForm }) => {
  const plans = [
    {
      title: "Basic plan",
      description:
        "The Basic Plan is perfect for beginners or those looking to explore the fundamentals. This plan is designed to provide a strong foundation with essential tools and resources, absolutely free of charge.",
      features: [
        "Access to beginner-friendly projects",
        "Step-by-step tutorials and guides",
        "Community support",
        "Basic tech stack: HTML, CSS, JavaScript",
        "Regular updates with new content",
      ],
      buttonLabel: "Start Subscribe",
    },
    {
      title: "Advance plan",
      description:
        "The Advanced Plan is tailored for individuals ready to dive deeper into more complex and comprehensive projects. This plan offers an expanded tech stack and more challenging tasks to enhance your skills.",
      features: [
        "Everything in the Basic Plan, plus:",
        "Access to advanced projects",
        "In-depth tutorials",
        "Expanded tech stack: React, Node.js, Python, SQL, and more",
        "Access to premium resources and tools",
        "Priority support from experts",
      ],
      buttonLabel: "Start Subscribe",
    },
    {
      title: "Premium plan",
      description:
        "The Premium Plan is the ultimate choice for innovators and creators who want to bring their unique ideas to life. This plan provides personalized support and resources to help you develop your custom projects from scratch.",
      features: [
        "Everything in the Advanced Plan, plus:",
        "Personalized project guidance and mentorship",
        "Custom tech stack tailored to your project needs",
        "Full access to all resources and tools",
        "Regular one-on-one consult",
      ],
      buttonLabel: "Start Subscribe",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 bg-gradient-to-b from-[#1B1F24] to-[#17212E] ">
      {plans.map((plan, index) => (
        <PriceCard
          key={index}
          title={plan.title}
          description={plan.description}
          features={plan.features}
          buttonLabel={plan.buttonLabel}
          openForm={openForm}
        />
      ))}
    </div>
  );
};

export default Pricing;
