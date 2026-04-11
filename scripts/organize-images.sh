#!/bin/bash
set -e
cd "$(dirname "$0")/.."

echo "📁 Organizando imagens em /public/images/..."

# Logo
cp "imagens/acierj.png" "public/images/logo/logo-acierj.png"

# Hero
cp "imagens/capaacierjoficial.png" "public/images/hero/capa-acierj.png"

# Quem somos
cp "imagens/foto da acierj1.jpg" "public/images/quem-somos/equipe-acierj.jpg"

# Projetos
cp "imagens/acierj3.jpg" "public/images/projetos/saude-mental.jpg"
cp "imagens/acierj4.jpg" "public/images/projetos/acoes-comunitarias.jpg"
cp "imagens/acierj5.jpg" "public/images/projetos/encontro-cuidadores.jpg"

# Sobre
cp "imagens/acierj6.jpg" "public/images/sobre/atividade-1.jpg"
cp "imagens/acierj7.jpg" "public/images/sobre/atividade-2.jpg"

# Icones
cp "imagens/acessibilidade.png" "public/images/icones/acessibilidade.png"

echo ""
echo "✅ Todas as 9 imagens copiadas com sucesso!"
echo ""
echo "Estrutura criada:"
find public/images -type f | sort | sed 's/^/  /'
