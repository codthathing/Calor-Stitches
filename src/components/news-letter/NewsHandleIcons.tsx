import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function NewsHandleIcons({ id, className }: { id: string; className?: string }) {
  const handleIcons = [
    { id: 0, HandleIcon: FaFacebook },
    { id: 1, HandleIcon: FaInstagram },
    { id: 2, HandleIcon: FaTiktok },
    { id: 3, HandleIcon: FaTwitter  },
  ];

  return (
    <aside id={id} className={className}>
      {handleIcons.map(({ id, HandleIcon }) => {
        return <HandleIcon key={id} className="newsHandle" /> 
      })}
    </aside>
  );
};
