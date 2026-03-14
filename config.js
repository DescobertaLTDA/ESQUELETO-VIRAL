// ══════════════════════════════════════════════════════════════
//  ESQUELETO VIRAL — Configuração do Painel de Canais
//  Edite este arquivo para gerenciar os canais monitorados.
//
//  COMO ENCONTRAR O CHANNEL ID:
//  → Acesse o canal no YouTube
//  → Clique em "Mais" > "Compartilhar canal" ou veja a URL
//  → O ID começa com "UC..." (ex: UCxxxxxxxxxxxxxxxxxxxxxx)
//  → Ou use: https://www.youtube.com/channel/ID
//
//  COMO OBTER A API KEY (gratuito):
//  → Acesse: https://console.cloud.google.com
//  → Crie um projeto → Ative "YouTube Data API v3"
//  → Credenciais → Criar credencial → Chave de API
//
//  STATUS DISPONÍVEIS: "active" | "done" | "waiting"
// ══════════════════════════════════════════════════════════════

const EV_CONFIG = {

  // ── Sua chave da YouTube Data API v3 ──
  YOUTUBE_API_KEY: 'AIzaSyDmTzgi8Jz7u_RG7kiMX8265EciewwdZPM',

  // ── Meta global de inscritos ──
  GOAL: 100000,

  // ── Lista de canais ──
  CANAIS: [
    {
      id: 'UCJWArKWSlKLzTOekfIHxOHw',
      nome: 'Canal Ligado',
      handle: '@ocanalligado',
      status: 'active',
      avatarUrl: '',
      subsManual: 0,
    },
  ],

};
