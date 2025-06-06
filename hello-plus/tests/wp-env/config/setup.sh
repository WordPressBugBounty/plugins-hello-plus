#!/bin/bash
set -eox pipefail

wp plugin activate elementor
wp theme activate hello-biz
wp plugin activate hello-plus

WP_CLI_CONFIG_PATH=hello-plus-config/wp-cli.yml wp rewrite structure '/%postname%/' --hard

# Remove the Guttenberg welcome guide popup
wp user meta add admin wp_persisted_preferences 'a:2:{s:14:\"core/edit-post\";a:2:{b:1;s:12:\"welcomeGuide\";b:0;}}'

# Reset editor counter to avoid auto trigger of the checklist popup when entering the editor for the 2nd time
wp option update e_editor_counter 10
wp option update elementor_checklist '{"last_opened_timestamp":null,"first_closed_checklist_in_editor":true,"is_popup_minimized":false,"steps":[],"should_open_in_editor":false,"editor_visit_count":10}'

wp option set elementor_onboarded true

# Add user meta so the announcement popup will not be displayed - ED-9723
for id in $(wp user list --field=ID)
do wp user meta add "$id" "announcements_user_counter" 999
done

wp cache flush
wp rewrite flush --hard
wp elementor flush-css
