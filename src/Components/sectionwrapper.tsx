import React from "react";

type Props = {
  id: string;
  children: React.ReactNode;
};

const SectionWrapper = ({ id, children }: Props) => {
  return (
    <section id={id} className="py-2 px-2 bg-white dark:bg-gray-900 scroll-mt-20">
      <div className="max-w-5xl mx-auto w-full">{children}</div>
    </section>
  );
};

export default SectionWrapper