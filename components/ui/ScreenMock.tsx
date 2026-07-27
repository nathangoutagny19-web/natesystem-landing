/**
 * Mockup navigateur réutilisable pour présenter un screenshot produit DANS une case,
 * sans zoom moche : une fenêtre (barre + 3 points) qui cadre la capture comme un vrai
 * mockup. Le parent contrôle la taille ; laisser de la marge (padding) autour pour que
 * ça « rentre bien dans la case ». Styles : .screenmock* dans app/globals.css (global).
 */
export default function ScreenMock({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <div className={`screenmock${className ? ` ${className}` : ''}`}>
      <div className="screenmock-bar" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <div
        className="screenmock-body"
        role="img"
        aria-label={alt}
        style={{ backgroundImage: `url(${src})` }}
      />
    </div>
  )
}
