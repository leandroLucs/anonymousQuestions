export default function Modal() {
  const modal = document.querySelector('.modalWrapper')
  const cancelButton = document.querySelector('.button.cancel')

  cancelButton.addEventListener('click', Close)

  function Open() {
    modal.classList.add('active')
  }

  function Close() {
    modal.classList.remove('active')
  }

  return {
    Open,
    Close
  }
}
