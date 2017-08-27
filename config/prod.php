<?php

// configure your app for the production environment

$app['twig.path'] = array(__DIR__.'/../templates');
$app['twig.options'] = array('cache' => false);//__DIR__.'/../var/cache/twig');
//$app['debug'] = true;
