export const ExperienceImage = () => {
  return (
    <div className="relative self-start box-border caret-transparent overflow-hidden rounded-[20px] w-full">
      <div className="relative w-full">
        <img
          src="/about_cutting_edge.jpg"
          alt="Cutting Edge fencing, tree care and landscaping work across Perth and Dundee"
          className="box-border caret-transparent inline-block max-w-full w-full h-auto object-contain rounded-[20px]"
        />
        <div 
          className="absolute inset-0 pointer-events-none rounded-[20px]"
          style={{ 
            background: '#323232',
            mixBlendMode: 'multiply',
            opacity: 0.4
          }}
        ></div>
      </div>
    </div>
  );
};
