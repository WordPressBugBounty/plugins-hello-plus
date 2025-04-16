<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit575ebed899dc98c6d74052fedd4b8bd8
{
    public static $prefixLengthsPsr4 = array (
        'E' => 
        array (
            'Elementor\\WPNotificationsPackage\\' => 33,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Elementor\\WPNotificationsPackage\\' => 
        array (
            0 => __DIR__ . '/..' . '/elementor/wp-notifications-package/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit575ebed899dc98c6d74052fedd4b8bd8::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit575ebed899dc98c6d74052fedd4b8bd8::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit575ebed899dc98c6d74052fedd4b8bd8::$classMap;

        }, null, ClassLoader::class);
    }
}
