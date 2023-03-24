export interface IHeaderProps {
  changeTransition: Function;
}

function Header({ changeTransition }: IHeaderProps) {
  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    changeTransition(e.target.value);
  }
  // disable left and right arrow changing the select value
  function handleKeyDown(e: React.KeyboardEvent<HTMLSelectElement>) {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
    }
  }
  return (
    <header className="relative z-10 -mb-16 flex items-center justify-center gap-2 p-4 text-sm text-gray-500">
      <label htmlFor="transition">Transition Effect: </label>
      <select
        id="transition"
        name="transition"
        className="w-40 rounded-lg border-[1px] border-gray-200 bg-gray-100 py-[0.15rem] px-4"
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => handleKeyDown(e)}
      >
        <option value="fade">Fade</option>
        <option value="scale">Scale</option>
        <option value="rotate">Rotate</option>
        <option value="slide_r">Slide</option>
        <option value="flip_x">Flip (vertical)</option>
        <option value="flip_y">Flip (horizontal)</option>
      </select>
    </header>
  );
}

export default Header;
