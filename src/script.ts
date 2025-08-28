interface Developer {
  username: string;
  yearsExperience: number;
  isActive: boolean;
  pictureUrl: string;
  email: string;
  phone: string;
  skills: string[];
  bio: string;
}

class DevCardManager {
  private container: HTMLElement | null;
  private developers: Developer[];

  constructor(containerId: string, devArray: Developer[]) {
    this.container = document.getElementById(containerId);
    this.developers = devArray;
  }

  private createCard(dev: Developer): string {
    const skills = dev.skills.join(", ");
    const statusText = dev.isActive ? "Active" : "Inactive";

    const imgClass = dev.isActive ? "" : "inactive";
    const statusClass = dev.isActive ? "" : "inactive";

    return `
      <div class="cardDiv">
        <img class="${imgClass}" src="${dev.pictureUrl}" alt="${dev.username}">
        <h2 class="userName">${dev.username}</h2>
        <p class="experience">Experience: ${dev.yearsExperience} yrs</p>
        <p class="activeStatus ${statusClass}">${statusText}</p>
        <a class="mail" href="mailto:${dev.email}">${dev.email}</a>
        <p class="phone">${dev.phone}</p>
        <p class="skills">Skills: ${skills}</p>
        <p class="bio">${dev.bio}</p>
      </div>
    `;
  }

  public displayCards(): void {
    if (this.container) {
      this.container.innerHTML = this.developers.map(dev => this.createCard(dev)).join("");
    }
  }
}


declare const developers: Developer[];

const manager = new DevCardManager("dev-cards-container", developers);
manager.displayCards();
