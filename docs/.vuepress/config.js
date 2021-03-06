module.exports = {
  title: 'Azure CLI Glossary',
  description: 'Preparation for AZ-204, collection of usefull command to have more knowledge and pass your certification!',
  plugins: ['@vuepress/back-to-top', '@vuepress/last-updated', '@vuepress/active-header-links'],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Common', ariaLabel: 'Common', items: [
          { text: 'Common Command', link: '/common/' },
          { text: 'Resource Group', link: '/resourcegroup/' },
        ]
      },
      {
        text: 'Computes', ariaLabel: 'Azure Compute Solutions', items: [
          { text: 'Function', link: '/function/' },
          { text: 'Logic Apps', link: '/logicapps/' },
          { text: 'Virtual Machine', link: '/vm/' },
          { text: 'Web App', link: '/webapp/' },
        ]
      },
      {
        text: 'Event/Message', ariaLabel: 'Event/Message in Azure', items: [
          { text: 'Azure Event Hub', link: '/eventhub/' }
        ]
      },
      {
        text: 'Security', ariaLabel: 'Security', items: [
          { text: 'Key Vault', link: '/keyvault/' }
        ]
      },
      {
        text: 'Storages', ariaLabel: 'Azure Storage Solutions', items: [
          { text: 'Cosmos DB', link: '/cosmos/' },
          { text: 'Storage Account', link: '/storageaccount/' }
        ]
      },
      { text: 'Github', link: 'https://github.com/berviantoleo/az204-azure-cli-glossary' }
    ]
  },
  base: process.env.BASE_URL || "/",
}