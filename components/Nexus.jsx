export function Nexus({ name, id }) {
  return (
    <a
      className="text-blue-400 underline hover:text-blue-500 transition-colors"
      target="_blank"
      href={`https://www.nexusmods.com/skyrimspecialedition/mods/${id}`}
    >
      {name}
    </a>
  );
}
