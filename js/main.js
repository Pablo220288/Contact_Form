let main = document.getElementById('main')
let info_contact_content = document.getElementById("info-contact-content");
let more_info = document.getElementById("more-info");

more_info.addEventListener("click", () => {
  if( info_contact_content.classList.contains("info-open")){
    info_contact_content.classList.remove("info-open")
    main.classList.remove("main-open")
  }else{
    info_contact_content.classList.add("info-open");
    main.classList.add("main-open")
  }
});

let form = document.getElementById("form");

let messageToastify = (input) => {
    Toastify({
        text: `${input} Requerid`,
        className: "info",
        style: {
          background: "#ff0000",
        }
      }).showToast();
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let item = e.target.children;
    if (item[0].firstElementChild.value === '') {
        let item = "Name"
        messageToastify(item)
    } else if (item[1].firstElementChild.value === '') {
      let item = "Phone"
      messageToastify(item)
    } else if (item[2].firstElementChild.value === '') {
      let item = "Email"
      messageToastify(item)
    } else if (item[3].firstElementChild.value === '') {
      let item = "Message"
      messageToastify(item)
    } else {
      Swal.fire({
          title: 'Are you sure?',
          text: "You are about to send a message!",
          icon: 'question',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, send it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Send!',
            'Your message has been sent.',
            'success'
          )
          form.reset();
        }
      })
    }
});