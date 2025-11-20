// A universal section wrapper for consistent spacing & centering

function SectionWrapper({ children, height = "h-auto", bg = "bg-white" }) {
  return (
    <section className={`${bg} w-full flex items-center justify-center ${height}`}>
      <div className="text-center flex flex-col items-center justify-center px-4 w-full">
        {children}
      </div>
    </section>
  );
}

export default SectionWrapper;
