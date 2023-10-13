export function Nexus({ name, id, notes }) {
  const props = {
    className: "text-blue-400 underline hover:text-blue-500 transition-colors",
    target: "_blank",
    href: `https://www.nexusmods.com/skyrimspecialedition/mods/${id}`
  }

  
  return (
   <>
    <a {...props}>
      {name}
    </a>
    {notes && <p className="text-xs text-gray-500 dark:text-gray-200">({notes})</p>}
   </>
  );
}
