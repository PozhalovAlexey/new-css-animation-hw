export default class Widget {
    collapsing() {
        const container = document.getElementById('widget');
        const wrapper = document.createElement('div');

        wrapper.innerHTML = `
      <button class="btn-collapse">Collapse</button>
      <div class="text-container">
        <div class="text-collapse">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </div>
      <div class="copy"></div>
    `;

        container.insertAdjacentHTML('beforeend', wrapper.outerHTML);

        const btn = document.querySelector('.btn-collapse');
        const textContainer = document.querySelector('.text-container');

        btn.addEventListener('click', (e) => {
            e.preventDefault();
            btn.classList.toggle('collapsed');

            if (btn.classList.contains('collapsed')) {
                textContainer.classList.remove('show');
            } else {
                textContainer.classList.add('show');
            }
        });
    }
}