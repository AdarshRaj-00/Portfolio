import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: '-24% 0px -56% 0px', threshold: [0.18, 0.35, 0.6] }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}
