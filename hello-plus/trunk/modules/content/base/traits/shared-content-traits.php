<?php

namespace HelloPlus\Modules\Content\Base\Traits;

use HelloPlus\Includes\Utils as Theme_Utils;

trait Shared_Content_Traits {

	protected function get_configured_breakpoints() {
		$active_devices = Theme_Utils::elementor()->breakpoints->get_active_devices_list( [ 'reverse' => true ] );
		$active_breakpoint_instances = Theme_Utils::elementor()->breakpoints->get_active_breakpoints();

		$devices_options = [];

		foreach ( $active_devices as $device_key ) {
			$device_label = 'desktop' === $device_key ? esc_html__( 'Desktop', 'hello-plus' ) : $active_breakpoint_instances[ $device_key ]->get_label();
			$devices_options[ $device_key ] = $device_label;
		}

		return [
			'active_devices' => $active_devices,
			'devices_options' => $devices_options,
		];
	}
}
