import { ReactNode } from "react";

const SectionContainer = ({
  customClass,
  id,
  children,
}: {
  customClass?: string;
  id: string;
  children: ReactNode;
}) => {
  return (
    <section
      id={id}
      className={`${customClass} p-10 scroll-m-20 w-full mx-auto container md:max-w-6xl`}
    >
      {children}
    </section>
  );
};

export default SectionContainer;
