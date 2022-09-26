
function Navbar() {
  return (
    <div className="flex flex-row p-5">
        <div className="flex flex-col">
          <p className="text-2xl font-semibold">Anaïs Haudiquer</p>
          <p>Ostéopathe</p>
        </div>
        <div className="flex flex-row justify-end space-x-4">
          <p>Qui suis-je</p>
          <p>Ostéopathie</p>
          <p>Pour qui ?</p>
          <p>Contact</p>
        </div>
    </div>
  )
}

export default Navbar