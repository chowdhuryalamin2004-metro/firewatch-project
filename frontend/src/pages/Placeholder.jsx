export default function Placeholder({ title, owner }) {
  return (
    <div className="empty">
      <h1>{title}</h1>
      <p>This page is built by {owner}. Add the component here when it is ready.</p>
    </div>
  )
}
