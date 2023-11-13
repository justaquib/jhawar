import * as HIcons from  "@heroicons/react/24/solid";

const HeroIcon = props => {
  const { ...icons } = HIcons
  const TheIcon = icons[props.icon]

  return (
    <>
      <TheIcon className="w-8" />
    </>
  )
}

export default HeroIcon
