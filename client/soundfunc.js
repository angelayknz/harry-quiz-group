// within the function
// function LivingRoom() {
//   let audio = useRef()

//   const [showFire, setShowFire] = useState(false)

//   useEffect(() => {
//     audio.current = new Audio('/sounds/introSound.mp3')
//     audio.current.volume = 0.3
//     audio.current.loop = true
//     audio.current.play()

//     // Stop audio when component unmounted: https://stackoverflow.com/a/64992721
//     return () => {
//       audio.current.pause()
//     }
//   }, [])
