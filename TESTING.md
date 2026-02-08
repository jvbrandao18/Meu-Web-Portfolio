# Guia de Testes - Meu Portfólio

Este projeto é um site estático, o que significa que não requer instalação de dependências ou build complexo. Os testes são principalmente visuais e de interação.

## Como Executar

Basta abrir o arquivo `index.html` em qualquer navegador moderno (Chrome, Firefox, Edge, etc.).

## Casos de Teste Manual

Aqui estão os principais recursos para verificar:

### 1. Navegação e Menu (Mobile)
- [ ] **Abrir Menu**: Em telas pequenas, clique no ícone de menu (apps) e verifique se o menu aparece.
- [ ] **Fechar Menu**: Clique no ícone de fechar (X) e verifique se o menu desaparece.
- [ ] **Links do Menu**: Clique em cada link (Home, Sobre, Habilidades, etc.) e verifique se a página rola para a seção correta e o menu fecha automaticamente (no mobile).

### 2. Seção de Habilidades (Accordion)
- [ ] Clique nas categorias (Frontend, Backend, Designer) para expandir e recolher as listas de habilidades.
- [ ] Verifique se apenas uma categoria fica aberta por vez ou se o comportamento de alternância funciona como esperado.

### 3. Qualificações (Tabs)
- [ ] Clique em "Formação" e verifique se o conteúdo muda para a lista de educação.
- [ ] Clique em "Trabalho" e verifique se o conteúdo muda para a experiência profissional.

### 4. Modais de Serviços
- [ ] Clique no botão "Veja mais" em cada serviço.
- [ ] Verifique se o modal abre com as informações detalhadas.
- [ ] Clique no "X" do modal e verifique se ele fecha.

### 5. Tema (Dark/Light Mode)
- [ ] Clique no ícone de lua/sol no cabeçalho.
- [ ] Verifique se o site alterna entre cores claras e escuras.
- [ ] Recarregue a página e verifique se a preferência do tema persiste (salvo no LocalStorage).

### 6. Scroll (Rolagem)
- [ ] Role a página e verifique se o cabeçalho ganha uma sombra (`scroll-header`) após rolar um pouco.
- [ ] Verifique se o botão de "Scroll Up" (seta para cima no canto inferior direito) aparece após rolar para baixo e se, ao clicar, volta ao topo.
- [ ] Observe se o link ativo no menu muda conforme você rola pelas diferentes seções (Active Link).

## Validação de Links
- [ ] Teste os links das redes sociais (Instagram, LinkedIn, GitHub) para garantir que abrem nas páginas corretas.
- [ ] Teste o botão de download do CV.
