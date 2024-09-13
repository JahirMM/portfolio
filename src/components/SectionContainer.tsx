import { ReactNode } from "react";

const SectionContainer = ({
  customClass,
  children,
}: {
  customClass?: string;
  children: ReactNode;
}) => {
  return (
    <section
      className={`section ${customClass} p-10 scroll-m-20 w-full mx-auto container md:max-w-6xl`}
    >
      {children}
    </section>
  );
};

export default SectionContainer;
