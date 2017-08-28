<?php

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

//Request::setTrustedProxies(array('127.0.0.1'));

$app->get('/', function () use ($app) {
    return $app['twig']->render('index.html.twig', array());
})
->bind('homepage');


$app->get('/to-do-app', 'Controllers\\ToDoController::index');
$app->get('/to-do-app-load', function () use ($app) {
    return json_encode(['data' => [
        ['value' => 'buy stuff', 'isDone' => false],
        ['value' => 'eat stuff', 'isDone' => true],
        ['value' => 'go to sleep', 'isDone' => false],
    ]]);
    return "{'data':[{'value': 'buy stuff', 'isDone': false},{'value': 'eat lunch', 'isDone': true}, {'value': 'go sleep', 'isDone':false}]}";
});

$app->get('/cv', function () use ($app) {
    return $app['twig']->render('cv/index.html.twig', array());
});

$app->error(function (\Exception $e, Request $request, $code) use ($app) {
    if ($app['debug']) {
        return;
    }

    // 404.html, or 40x.html, or 4xx.html, or error.html
    $templates = array(
        'errors/'.$code.'.html.twig',
        'errors/'.substr($code, 0, 2).'x.html.twig',
        'errors/'.substr($code, 0, 1).'xx.html.twig',
        'errors/default.html.twig',
    );

    return new Response($app['twig']->resolveTemplate($templates)->render(array('code' => $code)), $code);
});
