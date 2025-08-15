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
      className={`${customClass} scroll-m-20 w-full px-8`}
    >
      {children}
    </section>
  );
};

export default SectionContainer;
