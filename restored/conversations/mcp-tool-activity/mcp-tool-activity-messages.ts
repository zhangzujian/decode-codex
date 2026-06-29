// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Per-app active/completed activity labels for built-in MCP connectors and the
// aggregated registry mapping app keys + tool keys to their localized labels.
import { defineMessages } from "../../vendor/react-intl";
import {
  browserMcpToolLabels,
  figmaMcpToolLabels,
  githubMcpToolLabels,
  gmailMcpToolLabels,
  googleCalendarMcpToolLabels,
  googleDriveMcpToolLabels,
  linearMcpToolLabels,
} from "../../boundaries/onboarding-commons-externals.facade";
import type { McpToolActivityLabelMap } from "./mcp-tool-label-types";
import { withAppToolKeyAliases } from "./with-app-tool-key-aliases";

const notionMcpToolMessages = defineMessages({
  create_comment_active: {
    id: "localConversation.mcpToolActivity.notion.create_comment.active",
    defaultMessage: "Creating comment",
    description: "Active label for the notion create_comment MCP tool.",
  },
  create_comment_completed: {
    id: "localConversation.mcpToolActivity.notion.create_comment.completed",
    defaultMessage: "Created comment",
    description: "Completed label for the notion create_comment MCP tool.",
  },
  create_database_active: {
    id: "localConversation.mcpToolActivity.notion.create_database.active",
    defaultMessage: "Creating database",
    description: "Active label for the notion create_database MCP tool.",
  },
  create_database_completed: {
    id: "localConversation.mcpToolActivity.notion.create_database.completed",
    defaultMessage: "Created database",
    description: "Completed label for the notion create_database MCP tool.",
  },
  create_pages_active: {
    id: "localConversation.mcpToolActivity.notion.create_pages.active",
    defaultMessage: "Creating pages",
    description: "Active label for the notion create_pages MCP tool.",
  },
  create_pages_completed: {
    id: "localConversation.mcpToolActivity.notion.create_pages.completed",
    defaultMessage: "Created pages",
    description: "Completed label for the notion create_pages MCP tool.",
  },
  create_view_active: {
    id: "localConversation.mcpToolActivity.notion.create_view.active",
    defaultMessage: "Creating view",
    description: "Active label for the notion create_view MCP tool.",
  },
  create_view_completed: {
    id: "localConversation.mcpToolActivity.notion.create_view.completed",
    defaultMessage: "Created view",
    description: "Completed label for the notion create_view MCP tool.",
  },
  duplicate_page_active: {
    id: "localConversation.mcpToolActivity.notion.duplicate_page.active",
    defaultMessage: "Duplicating page",
    description: "Active label for the notion duplicate_page MCP tool.",
  },
  duplicate_page_completed: {
    id: "localConversation.mcpToolActivity.notion.duplicate_page.completed",
    defaultMessage: "Duplicated page",
    description: "Completed label for the notion duplicate_page MCP tool.",
  },
  move_pages_active: {
    id: "localConversation.mcpToolActivity.notion.move_pages.active",
    defaultMessage: "Moving pages",
    description: "Active label for the notion move_pages MCP tool.",
  },
  move_pages_completed: {
    id: "localConversation.mcpToolActivity.notion.move_pages.completed",
    defaultMessage: "Moved pages",
    description: "Completed label for the notion move_pages MCP tool.",
  },
  update_data_source_active: {
    id: "localConversation.mcpToolActivity.notion.update_data_source.active",
    defaultMessage: "Updating data source",
    description: "Active label for the notion update_data_source MCP tool.",
  },
  update_data_source_completed: {
    id: "localConversation.mcpToolActivity.notion.update_data_source.completed",
    defaultMessage: "Updated data source",
    description: "Completed label for the notion update_data_source MCP tool.",
  },
  update_page_active: {
    id: "localConversation.mcpToolActivity.notion.update_page.active",
    defaultMessage: "Updating page",
    description: "Active label for the notion update_page MCP tool.",
  },
  update_page_completed: {
    id: "localConversation.mcpToolActivity.notion.update_page.completed",
    defaultMessage: "Updated page",
    description: "Completed label for the notion update_page MCP tool.",
  },
  update_view_active: {
    id: "localConversation.mcpToolActivity.notion.update_view.active",
    defaultMessage: "Updating view",
    description: "Active label for the notion update_view MCP tool.",
  },
  update_view_completed: {
    id: "localConversation.mcpToolActivity.notion.update_view.completed",
    defaultMessage: "Updated view",
    description: "Completed label for the notion update_view MCP tool.",
  },
  fetch_active: {
    id: "localConversation.mcpToolActivity.notion.fetch.active",
    defaultMessage: "Fetching page",
    description: "Active label for the notion fetch MCP tool.",
  },
  fetch_completed: {
    id: "localConversation.mcpToolActivity.notion.fetch.completed",
    defaultMessage: "Fetched page",
    description: "Completed label for the notion fetch MCP tool.",
  },
  get_comments_active: {
    id: "localConversation.mcpToolActivity.notion.get_comments.active",
    defaultMessage: "Getting comments",
    description: "Active label for the notion get_comments MCP tool.",
  },
  get_comments_completed: {
    id: "localConversation.mcpToolActivity.notion.get_comments.completed",
    defaultMessage: "Got comments",
    description: "Completed label for the notion get_comments MCP tool.",
  },
  get_teams_active: {
    id: "localConversation.mcpToolActivity.notion.get_teams.active",
    defaultMessage: "Getting teams",
    description: "Active label for the notion get_teams MCP tool.",
  },
  get_teams_completed: {
    id: "localConversation.mcpToolActivity.notion.get_teams.completed",
    defaultMessage: "Got teams",
    description: "Completed label for the notion get_teams MCP tool.",
  },
  get_users_active: {
    id: "localConversation.mcpToolActivity.notion.get_users.active",
    defaultMessage: "Getting users",
    description: "Active label for the notion get_users MCP tool.",
  },
  get_users_completed: {
    id: "localConversation.mcpToolActivity.notion.get_users.completed",
    defaultMessage: "Got users",
    description: "Completed label for the notion get_users MCP tool.",
  },
  query_data_sources_active: {
    id: "localConversation.mcpToolActivity.notion.query_data_sources.active",
    defaultMessage: "Querying data sources",
    description: "Active label for the notion query_data_sources MCP tool.",
  },
  query_data_sources_completed: {
    id: "localConversation.mcpToolActivity.notion.query_data_sources.completed",
    defaultMessage: "Queried data sources",
    description: "Completed label for the notion query_data_sources MCP tool.",
  },
  query_meeting_notes_active: {
    id: "localConversation.mcpToolActivity.notion.query_meeting_notes.active",
    defaultMessage: "Querying meeting notes",
    description: "Active label for the notion query_meeting_notes MCP tool.",
  },
  query_meeting_notes_completed: {
    id: "localConversation.mcpToolActivity.notion.query_meeting_notes.completed",
    defaultMessage: "Queried meeting notes",
    description: "Completed label for the notion query_meeting_notes MCP tool.",
  },
  search_active: {
    id: "localConversation.mcpToolActivity.notion.search.active",
    defaultMessage: "Searching Notion",
    description: "Active label for the notion search MCP tool.",
  },
  search_completed: {
    id: "localConversation.mcpToolActivity.notion.search.completed",
    defaultMessage: "Searched Notion",
    description: "Completed label for the notion search MCP tool.",
  },
});

export const notionMcpToolLabels: McpToolActivityLabelMap =
  withAppToolKeyAliases("notion", {
    create_comment: {
      active: notionMcpToolMessages.create_comment_active,
      completed: notionMcpToolMessages.create_comment_completed,
    },
    create_database: {
      active: notionMcpToolMessages.create_database_active,
      completed: notionMcpToolMessages.create_database_completed,
    },
    create_pages: {
      active: notionMcpToolMessages.create_pages_active,
      completed: notionMcpToolMessages.create_pages_completed,
    },
    create_view: {
      active: notionMcpToolMessages.create_view_active,
      completed: notionMcpToolMessages.create_view_completed,
    },
    duplicate_page: {
      active: notionMcpToolMessages.duplicate_page_active,
      completed: notionMcpToolMessages.duplicate_page_completed,
    },
    move_pages: {
      active: notionMcpToolMessages.move_pages_active,
      completed: notionMcpToolMessages.move_pages_completed,
    },
    update_data_source: {
      active: notionMcpToolMessages.update_data_source_active,
      completed: notionMcpToolMessages.update_data_source_completed,
    },
    update_page: {
      active: notionMcpToolMessages.update_page_active,
      completed: notionMcpToolMessages.update_page_completed,
    },
    update_view: {
      active: notionMcpToolMessages.update_view_active,
      completed: notionMcpToolMessages.update_view_completed,
    },
    fetch: {
      active: notionMcpToolMessages.fetch_active,
      completed: notionMcpToolMessages.fetch_completed,
    },
    get_comments: {
      active: notionMcpToolMessages.get_comments_active,
      completed: notionMcpToolMessages.get_comments_completed,
    },
    get_teams: {
      active: notionMcpToolMessages.get_teams_active,
      completed: notionMcpToolMessages.get_teams_completed,
    },
    get_users: {
      active: notionMcpToolMessages.get_users_active,
      completed: notionMcpToolMessages.get_users_completed,
    },
    query_data_sources: {
      active: notionMcpToolMessages.query_data_sources_active,
      completed: notionMcpToolMessages.query_data_sources_completed,
    },
    query_meeting_notes: {
      active: notionMcpToolMessages.query_meeting_notes_active,
      completed: notionMcpToolMessages.query_meeting_notes_completed,
    },
    search: {
      active: notionMcpToolMessages.search_active,
      completed: notionMcpToolMessages.search_completed,
    },
  });

const sitesMcpToolMessages = defineMessages({
  create_project_active: {
    id: "localConversation.mcpToolActivity.sites.create_project.active",
    defaultMessage: "Creating Sites project",
    description: "Active label for the Sites create_project MCP tool.",
  },
  create_project_completed: {
    id: "localConversation.mcpToolActivity.sites.create_project.completed",
    defaultMessage: "Created Sites project",
    description: "Completed label for the Sites create_project MCP tool.",
  },
  create_project_version_active: {
    id: "localConversation.mcpToolActivity.sites.create_project_version.active",
    defaultMessage: "Saving Sites version",
    description: "Active label for the Sites create_project_version MCP tool.",
  },
  create_project_version_completed: {
    id: "localConversation.mcpToolActivity.sites.create_project_version.completed",
    defaultMessage: "Saved Sites version",
    description:
      "Completed label for the Sites create_project_version MCP tool.",
  },
  deploy_project_version_active: {
    id: "localConversation.mcpToolActivity.sites.deploy_project_version.active",
    defaultMessage: "Deploying Sites version",
    description: "Active label for the Sites deploy_project_version MCP tool.",
  },
  deploy_project_version_completed: {
    id: "localConversation.mcpToolActivity.sites.deploy_project_version.completed",
    defaultMessage: "Deployed Sites version",
    description:
      "Completed label for the Sites deploy_project_version MCP tool.",
  },
  get_project_active: {
    id: "localConversation.mcpToolActivity.sites.get_project.active",
    defaultMessage: "Getting Sites project",
    description: "Active label for the Sites get_project MCP tool.",
  },
  get_project_completed: {
    id: "localConversation.mcpToolActivity.sites.get_project.completed",
    defaultMessage: "Got Sites project",
    description: "Completed label for the Sites get_project MCP tool.",
  },
  get_environment_active: {
    id: "localConversation.mcpToolActivity.sites.get_environment.active",
    defaultMessage: "Getting Sites environment",
    description: "Active label for the Sites get_environment MCP tool.",
  },
  get_environment_completed: {
    id: "localConversation.mcpToolActivity.sites.get_environment.completed",
    defaultMessage: "Got Sites environment",
    description: "Completed label for the Sites get_environment MCP tool.",
  },
  get_project_deployment_active: {
    id: "localConversation.mcpToolActivity.sites.get_project_deployment.active",
    defaultMessage: "Getting Sites deployment",
    description: "Active label for the Sites get_project_deployment MCP tool.",
  },
  get_project_deployment_completed: {
    id: "localConversation.mcpToolActivity.sites.get_project_deployment.completed",
    defaultMessage: "Got Sites deployment",
    description:
      "Completed label for the Sites get_project_deployment MCP tool.",
  },
  get_project_version_active: {
    id: "localConversation.mcpToolActivity.sites.get_project_version.active",
    defaultMessage: "Getting Sites version",
    description: "Active label for the Sites get_project_version MCP tool.",
  },
  get_project_version_completed: {
    id: "localConversation.mcpToolActivity.sites.get_project_version.completed",
    defaultMessage: "Got Sites version",
    description: "Completed label for the Sites get_project_version MCP tool.",
  },
  list_access_groups_active: {
    id: "localConversation.mcpToolActivity.sites.list_access_groups.active",
    defaultMessage: "Listing access groups",
    description: "Active label for the Sites list_access_groups MCP tool.",
  },
  list_access_groups_completed: {
    id: "localConversation.mcpToolActivity.sites.list_access_groups.completed",
    defaultMessage: "Listed access groups",
    description: "Completed label for the Sites list_access_groups MCP tool.",
  },
  list_projects_active: {
    id: "localConversation.mcpToolActivity.sites.list_projects.active",
    defaultMessage: "Listing Sites projects",
    description: "Active label for the Sites list_projects MCP tool.",
  },
  list_projects_completed: {
    id: "localConversation.mcpToolActivity.sites.list_projects.completed",
    defaultMessage: "Listed Sites projects",
    description: "Completed label for the Sites list_projects MCP tool.",
  },
  update_access_active: {
    id: "localConversation.mcpToolActivity.sites.update_access.active",
    defaultMessage: "Updating Sites access",
    description: "Active label for the Sites update_access MCP tool.",
  },
  update_access_completed: {
    id: "localConversation.mcpToolActivity.sites.update_access.completed",
    defaultMessage: "Updated Sites access",
    description: "Completed label for the Sites update_access MCP tool.",
  },
  update_environment_active: {
    id: "localConversation.mcpToolActivity.sites.update_environment.active",
    defaultMessage: "Updating Sites environment",
    description: "Active label for the Sites update_environment MCP tool.",
  },
  update_environment_completed: {
    id: "localConversation.mcpToolActivity.sites.update_environment.completed",
    defaultMessage: "Updated Sites environment",
    description: "Completed label for the Sites update_environment MCP tool.",
  },
});

export const sitesMcpToolLabels: McpToolActivityLabelMap =
  withAppToolKeyAliases("sites", {
    create_project: {
      active: sitesMcpToolMessages.create_project_active,
      completed: sitesMcpToolMessages.create_project_completed,
    },
    create_project_version: {
      active: sitesMcpToolMessages.create_project_version_active,
      completed: sitesMcpToolMessages.create_project_version_completed,
    },
    deploy_project_version: {
      active: sitesMcpToolMessages.deploy_project_version_active,
      completed: sitesMcpToolMessages.deploy_project_version_completed,
    },
    get_project: {
      active: sitesMcpToolMessages.get_project_active,
      completed: sitesMcpToolMessages.get_project_completed,
    },
    get_environment: {
      active: sitesMcpToolMessages.get_environment_active,
      completed: sitesMcpToolMessages.get_environment_completed,
    },
    get_project_deployment: {
      active: sitesMcpToolMessages.get_project_deployment_active,
      completed: sitesMcpToolMessages.get_project_deployment_completed,
    },
    get_project_version: {
      active: sitesMcpToolMessages.get_project_version_active,
      completed: sitesMcpToolMessages.get_project_version_completed,
    },
    list_access_groups: {
      active: sitesMcpToolMessages.list_access_groups_active,
      completed: sitesMcpToolMessages.list_access_groups_completed,
    },
    list_projects: {
      active: sitesMcpToolMessages.list_projects_active,
      completed: sitesMcpToolMessages.list_projects_completed,
    },
    update_access: {
      active: sitesMcpToolMessages.update_access_active,
      completed: sitesMcpToolMessages.update_access_completed,
    },
    update_environment: {
      active: sitesMcpToolMessages.update_environment_active,
      completed: sitesMcpToolMessages.update_environment_completed,
    },
  });

const slackMcpToolMessages = defineMessages({
  create_canvas_active: {
    id: "localConversation.mcpToolActivity.slack.create_canvas.active",
    defaultMessage: "Creating canvas",
    description: "Active label for the slack create_canvas MCP tool.",
  },
  create_canvas_completed: {
    id: "localConversation.mcpToolActivity.slack.create_canvas.completed",
    defaultMessage: "Created canvas",
    description: "Completed label for the slack create_canvas MCP tool.",
  },
  schedule_message_active: {
    id: "localConversation.mcpToolActivity.slack.schedule_message.active",
    defaultMessage: "Scheduling message",
    description: "Active label for the slack schedule_message MCP tool.",
  },
  schedule_message_completed: {
    id: "localConversation.mcpToolActivity.slack.schedule_message.completed",
    defaultMessage: "Scheduled message",
    description: "Completed label for the slack schedule_message MCP tool.",
  },
  send_message_active: {
    id: "localConversation.mcpToolActivity.slack.send_message.active",
    defaultMessage: "Sending message",
    description: "Active label for the slack send_message MCP tool.",
  },
  send_message_completed: {
    id: "localConversation.mcpToolActivity.slack.send_message.completed",
    defaultMessage: "Sent message",
    description: "Completed label for the slack send_message MCP tool.",
  },
  send_message_draft_active: {
    id: "localConversation.mcpToolActivity.slack.send_message_draft.active",
    defaultMessage: "Creating message draft",
    description: "Active label for the slack send_message_draft MCP tool.",
  },
  send_message_draft_completed: {
    id: "localConversation.mcpToolActivity.slack.send_message_draft.completed",
    defaultMessage: "Created message draft",
    description: "Completed label for the slack send_message_draft MCP tool.",
  },
  read_canvas_active: {
    id: "localConversation.mcpToolActivity.slack.read_canvas.active",
    defaultMessage: "Reading canvas",
    description: "Active label for the slack read_canvas MCP tool.",
  },
  read_canvas_completed: {
    id: "localConversation.mcpToolActivity.slack.read_canvas.completed",
    defaultMessage: "Read canvas",
    description: "Completed label for the slack read_canvas MCP tool.",
  },
  read_channel_active: {
    id: "localConversation.mcpToolActivity.slack.read_channel.active",
    defaultMessage: "Reading channel",
    description: "Active label for the slack read_channel MCP tool.",
  },
  read_channel_completed: {
    id: "localConversation.mcpToolActivity.slack.read_channel.completed",
    defaultMessage: "Read channel",
    description: "Completed label for the slack read_channel MCP tool.",
  },
  read_thread_active: {
    id: "localConversation.mcpToolActivity.slack.read_thread.active",
    defaultMessage: "Reading thread",
    description: "Active label for the slack read_thread MCP tool.",
  },
  read_thread_completed: {
    id: "localConversation.mcpToolActivity.slack.read_thread.completed",
    defaultMessage: "Read thread",
    description: "Completed label for the slack read_thread MCP tool.",
  },
  read_user_profile_active: {
    id: "localConversation.mcpToolActivity.slack.read_user_profile.active",
    defaultMessage: "Reading user profile",
    description: "Active label for the slack read_user_profile MCP tool.",
  },
  read_user_profile_completed: {
    id: "localConversation.mcpToolActivity.slack.read_user_profile.completed",
    defaultMessage: "Read user profile",
    description: "Completed label for the slack read_user_profile MCP tool.",
  },
  search_channels_active: {
    id: "localConversation.mcpToolActivity.slack.search_channels.active",
    defaultMessage: "Searching channels",
    description: "Active label for the slack search_channels MCP tool.",
  },
  search_channels_completed: {
    id: "localConversation.mcpToolActivity.slack.search_channels.completed",
    defaultMessage: "Searched channels",
    description: "Completed label for the slack search_channels MCP tool.",
  },
  search_public_active: {
    id: "localConversation.mcpToolActivity.slack.search_public.active",
    defaultMessage: "Searching messages",
    description: "Active label for the slack search_public MCP tool.",
  },
  search_public_completed: {
    id: "localConversation.mcpToolActivity.slack.search_public.completed",
    defaultMessage: "Searched messages",
    description: "Completed label for the slack search_public MCP tool.",
  },
  search_public_and_private_active: {
    id: "localConversation.mcpToolActivity.slack.search_public_and_private.active",
    defaultMessage: "Searching messages",
    description:
      "Active label for the slack search_public_and_private MCP tool.",
  },
  search_public_and_private_completed: {
    id: "localConversation.mcpToolActivity.slack.search_public_and_private.completed",
    defaultMessage: "Searched messages",
    description:
      "Completed label for the slack search_public_and_private MCP tool.",
  },
  search_users_active: {
    id: "localConversation.mcpToolActivity.slack.search_users.active",
    defaultMessage: "Searching users",
    description: "Active label for the slack search_users MCP tool.",
  },
  search_users_completed: {
    id: "localConversation.mcpToolActivity.slack.search_users.completed",
    defaultMessage: "Searched users",
    description: "Completed label for the slack search_users MCP tool.",
  },
});

export const slackMcpToolLabels: McpToolActivityLabelMap =
  withAppToolKeyAliases("slack", {
    create_canvas: {
      active: slackMcpToolMessages.create_canvas_active,
      completed: slackMcpToolMessages.create_canvas_completed,
    },
    schedule_message: {
      active: slackMcpToolMessages.schedule_message_active,
      completed: slackMcpToolMessages.schedule_message_completed,
    },
    send_message: {
      active: slackMcpToolMessages.send_message_active,
      completed: slackMcpToolMessages.send_message_completed,
    },
    send_message_draft: {
      active: slackMcpToolMessages.send_message_draft_active,
      completed: slackMcpToolMessages.send_message_draft_completed,
    },
    read_canvas: {
      active: slackMcpToolMessages.read_canvas_active,
      completed: slackMcpToolMessages.read_canvas_completed,
    },
    read_channel: {
      active: slackMcpToolMessages.read_channel_active,
      completed: slackMcpToolMessages.read_channel_completed,
    },
    read_thread: {
      active: slackMcpToolMessages.read_thread_active,
      completed: slackMcpToolMessages.read_thread_completed,
    },
    read_user_profile: {
      active: slackMcpToolMessages.read_user_profile_active,
      completed: slackMcpToolMessages.read_user_profile_completed,
    },
    search_channels: {
      active: slackMcpToolMessages.search_channels_active,
      completed: slackMcpToolMessages.search_channels_completed,
    },
    search_public: {
      active: slackMcpToolMessages.search_public_active,
      completed: slackMcpToolMessages.search_public_completed,
    },
    search_public_and_private: {
      active: slackMcpToolMessages.search_public_and_private_active,
      completed: slackMcpToolMessages.search_public_and_private_completed,
    },
    search_users: {
      active: slackMcpToolMessages.search_users_active,
      completed: slackMcpToolMessages.search_users_completed,
    },
  });

const vercelMcpToolMessages = defineMessages({
  deploy_to_vercel_active: {
    id: "localConversation.mcpToolActivity.vercel.deploy_to_vercel.active",
    defaultMessage: "Deploying to Vercel",
    description: "Active label for the vercel deploy_to_vercel MCP tool.",
  },
  deploy_to_vercel_completed: {
    id: "localConversation.mcpToolActivity.vercel.deploy_to_vercel.completed",
    defaultMessage: "Deployed to Vercel",
    description: "Completed label for the vercel deploy_to_vercel MCP tool.",
  },
  check_domain_availability_and_price_active: {
    id: "localConversation.mcpToolActivity.vercel.check_domain_availability_and_price.active",
    defaultMessage: "Checking domain availability",
    description:
      "Active label for the vercel check_domain_availability_and_price MCP tool.",
  },
  check_domain_availability_and_price_completed: {
    id: "localConversation.mcpToolActivity.vercel.check_domain_availability_and_price.completed",
    defaultMessage: "Checked domain availability",
    description:
      "Completed label for the vercel check_domain_availability_and_price MCP tool.",
  },
  get_access_to_vercel_url_active: {
    id: "localConversation.mcpToolActivity.vercel.get_access_to_vercel_url.active",
    defaultMessage: "Getting deployment access",
    description:
      "Active label for the vercel get_access_to_vercel_url MCP tool.",
  },
  get_access_to_vercel_url_completed: {
    id: "localConversation.mcpToolActivity.vercel.get_access_to_vercel_url.completed",
    defaultMessage: "Got deployment access",
    description:
      "Completed label for the vercel get_access_to_vercel_url MCP tool.",
  },
  get_deployment_active: {
    id: "localConversation.mcpToolActivity.vercel.get_deployment.active",
    defaultMessage: "Getting deployment",
    description: "Active label for the vercel get_deployment MCP tool.",
  },
  get_deployment_completed: {
    id: "localConversation.mcpToolActivity.vercel.get_deployment.completed",
    defaultMessage: "Got deployment",
    description: "Completed label for the vercel get_deployment MCP tool.",
  },
  get_deployment_build_logs_active: {
    id: "localConversation.mcpToolActivity.vercel.get_deployment_build_logs.active",
    defaultMessage: "Getting build logs",
    description:
      "Active label for the vercel get_deployment_build_logs MCP tool.",
  },
  get_deployment_build_logs_completed: {
    id: "localConversation.mcpToolActivity.vercel.get_deployment_build_logs.completed",
    defaultMessage: "Got build logs",
    description:
      "Completed label for the vercel get_deployment_build_logs MCP tool.",
  },
  get_project_active: {
    id: "localConversation.mcpToolActivity.vercel.get_project.active",
    defaultMessage: "Getting project",
    description: "Active label for the vercel get_project MCP tool.",
  },
  get_project_completed: {
    id: "localConversation.mcpToolActivity.vercel.get_project.completed",
    defaultMessage: "Got project",
    description: "Completed label for the vercel get_project MCP tool.",
  },
  list_deployments_active: {
    id: "localConversation.mcpToolActivity.vercel.list_deployments.active",
    defaultMessage: "Listing deployments",
    description: "Active label for the vercel list_deployments MCP tool.",
  },
  list_deployments_completed: {
    id: "localConversation.mcpToolActivity.vercel.list_deployments.completed",
    defaultMessage: "Listed deployments",
    description: "Completed label for the vercel list_deployments MCP tool.",
  },
  list_projects_active: {
    id: "localConversation.mcpToolActivity.vercel.list_projects.active",
    defaultMessage: "Listing projects",
    description: "Active label for the vercel list_projects MCP tool.",
  },
  list_projects_completed: {
    id: "localConversation.mcpToolActivity.vercel.list_projects.completed",
    defaultMessage: "Listed projects",
    description: "Completed label for the vercel list_projects MCP tool.",
  },
  list_teams_active: {
    id: "localConversation.mcpToolActivity.vercel.list_teams.active",
    defaultMessage: "Listing teams",
    description: "Active label for the vercel list_teams MCP tool.",
  },
  list_teams_completed: {
    id: "localConversation.mcpToolActivity.vercel.list_teams.completed",
    defaultMessage: "Listed teams",
    description: "Completed label for the vercel list_teams MCP tool.",
  },
  search_vercel_documentation_active: {
    id: "localConversation.mcpToolActivity.vercel.search_vercel_documentation.active",
    defaultMessage: "Searching Vercel docs",
    description:
      "Active label for the vercel search_vercel_documentation MCP tool.",
  },
  search_vercel_documentation_completed: {
    id: "localConversation.mcpToolActivity.vercel.search_vercel_documentation.completed",
    defaultMessage: "Searched Vercel docs",
    description:
      "Completed label for the vercel search_vercel_documentation MCP tool.",
  },
  web_fetch_vercel_url_active: {
    id: "localConversation.mcpToolActivity.vercel.web_fetch_vercel_url.active",
    defaultMessage: "Fetching deployment URL",
    description: "Active label for the vercel web_fetch_vercel_url MCP tool.",
  },
  web_fetch_vercel_url_completed: {
    id: "localConversation.mcpToolActivity.vercel.web_fetch_vercel_url.completed",
    defaultMessage: "Fetched deployment URL",
    description:
      "Completed label for the vercel web_fetch_vercel_url MCP tool.",
  },
});

export const vercelMcpToolLabels: McpToolActivityLabelMap = {
  deploy_to_vercel: {
    active: vercelMcpToolMessages.deploy_to_vercel_active,
    completed: vercelMcpToolMessages.deploy_to_vercel_completed,
  },
  check_domain_availability_and_price: {
    active: vercelMcpToolMessages.check_domain_availability_and_price_active,
    completed:
      vercelMcpToolMessages.check_domain_availability_and_price_completed,
  },
  get_access_to_vercel_url: {
    active: vercelMcpToolMessages.get_access_to_vercel_url_active,
    completed: vercelMcpToolMessages.get_access_to_vercel_url_completed,
  },
  get_deployment: {
    active: vercelMcpToolMessages.get_deployment_active,
    completed: vercelMcpToolMessages.get_deployment_completed,
  },
  get_deployment_build_logs: {
    active: vercelMcpToolMessages.get_deployment_build_logs_active,
    completed: vercelMcpToolMessages.get_deployment_build_logs_completed,
  },
  get_project: {
    active: vercelMcpToolMessages.get_project_active,
    completed: vercelMcpToolMessages.get_project_completed,
  },
  list_deployments: {
    active: vercelMcpToolMessages.list_deployments_active,
    completed: vercelMcpToolMessages.list_deployments_completed,
  },
  list_projects: {
    active: vercelMcpToolMessages.list_projects_active,
    completed: vercelMcpToolMessages.list_projects_completed,
  },
  list_teams: {
    active: vercelMcpToolMessages.list_teams_active,
    completed: vercelMcpToolMessages.list_teams_completed,
  },
  search_vercel_documentation: {
    active: vercelMcpToolMessages.search_vercel_documentation_active,
    completed: vercelMcpToolMessages.search_vercel_documentation_completed,
  },
  web_fetch_vercel_url: {
    active: vercelMcpToolMessages.web_fetch_vercel_url_active,
    completed: vercelMcpToolMessages.web_fetch_vercel_url_completed,
  },
};

export interface McpAppToolActivityRegistry {
  apps: Record<string, { tools: McpToolActivityLabelMap }>;
  tools: McpToolActivityLabelMap;
}

export const mcpAppToolActivityRegistry: McpAppToolActivityRegistry = {
  apps: {
    browser: { tools: browserMcpToolLabels },
    github: { tools: githubMcpToolLabels },
    gmail: { tools: gmailMcpToolLabels },
    google_calendar: { tools: googleCalendarMcpToolLabels },
    google_drive: { tools: googleDriveMcpToolLabels },
    figma: { tools: figmaMcpToolLabels },
    linear: { tools: linearMcpToolLabels },
    notion: { tools: notionMcpToolLabels },
    sites: { tools: sitesMcpToolLabels },
    slack: { tools: slackMcpToolLabels },
    vercel: { tools: vercelMcpToolLabels },
  },
  tools: {
    browser_run_code_unsafe: browserMcpToolLabels.browser_run_code_unsafe,
  },
};
