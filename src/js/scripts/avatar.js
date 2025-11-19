export function cadastro() {
    const avatarInput = document.getElementById('avatarInput');
    const preview = document.getElementById('preview');
    avatarInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      file && (() => {
        const reader = new FileReader();
        reader.onload = (event) => {
          preview.src = event.target.result;
        };
        reader.readAsDataURL(file);
      })()
    });

    document.getElementById('cadastroForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const senha = document.getElementById('senha').value;
      const confirmar = document.getElementById('confirmar').value;
      (senha !== confirmar) ? alert('As senhas não coincidem!') : alert('Cadastro realizado com sucesso!');
    });
}
