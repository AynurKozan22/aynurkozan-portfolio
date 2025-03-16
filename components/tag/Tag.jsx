const Tag = () => {
  const tagList = [
    "Performance Optimization & Code Splitting",
    "Vite, Parcel, Babel,",
    "Vercel",
    "Salesforce Commerce Cloud (SFCC)",
    "HTML5",
    " CSS3",
    "Figma, Zeplin, Adobe XD",
    "Responsive & Mobile-First Design",
    "Joomla, WordPress",
    "Shopify",
    "Lighthouse, ESLint, Prettie",
    "Agile Methodologies",
    "Time Management",
    "Digital Design",
    "Marketing",
    "PhotoShop",
    "Illustrator",
  ];
  return (
    <>
      {tagList.map((tag, i) => (
        <button className="resume-btn text-[15px]" key={i}>
          {tag}
        </button>
      ))}
    </>
  );
};

export default Tag;
