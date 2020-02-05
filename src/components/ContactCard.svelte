<style>
    .contact-card {
        border: 1px solid #aaa;
        width: 400px;
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        padding: 1rem;
        box-sizing: border-box;
        margin: 1rem auto;
    }
    h2 {
        border-bottom: 1px solid #ff3e00;
    }
</style>

<article class="contact-card">
  <h2>
    <slot name="name">
      <span class="missing">Unknown Name</span>
    </slot>
  </h2>
  <div class="email">
    <slot name="email">
        <span class="missing">Unknown email</span>
    </slot>
  </div>
</article>
