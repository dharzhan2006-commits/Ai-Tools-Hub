
const tools = [
  {
    name: "ChatGPT",
    category: "Writing",
    description: "An AI assistant for writing, brainstorming, and everyday tasks.",
    url: "https://chatgpt.com/"
  },
  {
    name: "Grammarly",
    category: "Writing",
    description: "Get help with grammar, spelling, and writing clarity.",
    url: "https://www.grammarly.com/"
  },
  {
    name: "Canva",
    category: "Image",
    description: "Design presentations, graphics, and visual content.",
    url: "https://www.canva.com/"
  },
  {
    name: "Adobe Firefly",
    category: "Image",
    description: "Explore AI-powered image creation and creative tools.",
    url: "https://firefly.adobe.com/"
  },
  {
    name: "GitHub Copilot",
    category: "Coding",
    description: "An AI coding assistant integrated with development tools.",
    url: "https://github.com/features/copilot"
  },
  {
    name: "Replit",
    category: "Coding",
    description: "Build and experiment with software in an online coding environment.",
    url: "https://replit.com/"
  },
  {
    name: "Notion",
    category: "Productivity",
    description: "Organize notes, projects, and information in one workspace.",
    url: "https://www.notion.so/"
  },
  {
    name: "Perplexity",
    category: "Research",
    description: "Explore questions and discover sources for further research.",
    url: "https://www.perplexity.ai/"
  },
  
  ,
  {
    name: "Claude",
    category: "Writing",
    description: "An AI assistant for writing, analysis, and problem-solving.",
    url: "https://claude.ai/"
  },
  {
    name: "DeepSeek",
    category: "Coding",
    description: "Explore AI assistance for coding, reasoning, and research.",
    url: "https://chat.deepseek.com/"
  },
  {
    name: "Leonardo AI",
    category: "Image",
    description: "Create AI-generated artwork and visual concepts.",
    url: "https://leonardo.ai/"
  },
  {
    name: "Zapier",
    category: "Productivity",
    description: "Connect apps and automate repetitive workflows.",
    url: "https://zapier.com/"
  }
];

const toolsGrid = document.getElementById("toolsGrid");
const searchInput = document.getElementById("searchInput");
const categoryButtons = document.querySelectorAll(".category-button");
const emptyMessage = document.getElementById("emptyMessage");

let selectedCategory = "All";

function displayTools() {
  const searchText = searchInput.value.toLowerCase().trim();

  const filteredTools = tools.filter((tool) => {
    const matchesCategory =
      selectedCategory === "All" ||
      tool.category === selectedCategory;

    const searchableText =
      `${tool.name} ${tool.category} ${tool.description}`.toLowerCase();

    const matchesSearch = searchableText.includes(searchText);

    return matchesCategory && matchesSearch;
  });

  toolsGrid.innerHTML = filteredTools.map((tool) => `
    <article class="tool-card">
      <span class="tool-category">${tool.category}</span>
      <h3>${tool.name}</h3>
      <p>${tool.description}</p>
      <a
        class="tool-link"
        href="${tool.url}"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit official website ↗
      </a>
    </article>
  `).join("");

  emptyMessage.hidden = filteredTools.length > 0;
}

searchInput.addEventListener("input", displayTools);

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedCategory = button.dataset.category;

    categoryButtons.forEach((item) => {
      item.classList.toggle("active", item === button);
    });

    displayTools();
  });
});

displayTools();
