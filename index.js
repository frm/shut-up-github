function delayedActivityRemoval() {
  const recentActivityTitle = [
    ...document.getElementsByTagName("h2")
    ].filter(elem => elem.innerHTML.toLowerCase() == "recent activity")[0];

  if (recentActivityTitle) {
    const recentActivity = recentActivityTitle.nextElementSibling;
    recentActivity.remove();
    recentActivityTitle.remove();
  } else {
    window.setTimeout(delayedActivityRemoval, 500);
  }
};

const inDashboard = window.location.href.match(
  /^https?:\/\/(www\.)?github.com\/?$/
);

const removeNotifications = () => {
  const notification = document.getElementsByClassName(
    "Header-link notification-indicator"
  )[0];

  if (notification) notification.parentElement.remove();
};

const removeSidebars = () => {
  [...document.getElementsByClassName("team-left-column")].forEach(
    elem => elem.remove()
  );
};

const alignDashboard = () => {
  const dashboard = document.getElementById("dashboard");

  if (!dashboard) return;

  const allActivityTitle = [
    ...document.getElementsByTagName("h2")
    ].filter(elem => elem.innerHTML.toLowerCase() == "all activity")[0];

  allActivityTitle.remove();

  dashboard.style.maxWidth = "80%";
  dashboard.style.margin = "0 auto";
}

const dashboardElementsRemoval = () => {
  delayedActivityRemoval();
  removeSidebars();
  alignDashboard();
};

(() => {
  removeNotifications();

  if (inDashboard) dashboardElementsRemoval();
})();
