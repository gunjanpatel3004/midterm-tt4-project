document.addEventListener('DOMContentLoaded', function () {
    const addProductForm = document.getElementById('addProductForm');

    if (addProductForm) {
        addProductForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Evita o envio padrão do formulário

            // Captura os valores dos campos
            const photo = document.getElementById('productPhoto').files[0];
            const title = document.getElementById('productTitle').value;
            const description = document.getElementById('productDescription').value;
            const price = parseFloat(document.getElementById('productPrice').value);
            const quantity = parseInt(document.getElementById('productQuantity').value);

            // Validação básica
            if (!title || !description || !price || !quantity) {
                alert('Por favor, preencha todos os campos.');
                return;
            }

            if (description.length > 100) {
                alert('A descrição não pode ter mais de 100 caracteres.');
                return;
            }

            // Cria um objeto com os dados do produto
            const product = {
                photo,
                title,
                description,
                price,
                quantity,
            };

            // Exibe o produto no console (substitua por lógica de envio para o backend)
            console.log('Novo produto adicionado:', product);

            // Limpa o formulário após o envio
            addProductForm.reset();

            // Exibe uma mensagem de sucesso
            alert('Produto adicionado com sucesso!');
        });
    } else {
        console.error('Formulário não encontrado!');
    }
});