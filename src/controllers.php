<?php

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

//Request::setTrustedProxies(array('127.0.0.1'));

$app->get('/', function () use ($app) {
    return $app['twig']->render('cv.html.twig', array());
})
->bind('homepage');


$app->post('/user', 'Controllers\\UserController::store');
$app->get('/user', 'Controllers\\UserController::index');

$app->get('/to-do-app', 'Controllers\\ToDoController::index');

$app->get('/to-do-app-load', function () use ($app) {
    $session = $app['session']->get('todo');
    return !empty($session) ? json_encode($session) : json_encode(['data' => [
        ['value' => 'buy stuff', 'isDone' => true],
        ['value' => 'eat stuff', 'isDone' => true],
        ['value' => 'go to sleep', 'isDone' => false],
    ]]);
});
$app->post('/to-do-app-save', function () use ($app) {
    $app['session']->set('todo', $_REQUEST['data']);
//    $_SESSION['todo'] = $_REQUEST['data'];
    return json_encode($_REQUEST);
});


$app->get('/cv', function () use ($app) {
    return $app['twig']->render('mobile/index.html.twig', array());
});

$app->get('/lesson3', function () use ($app) {
    return $app['twig']->render('lesson3/index.html.twig', array());
});
$app->get('/lesson4', function () use ($app) {
    return $app['twig']->render('lesson4/index.html.twig', array());
});

$app->get('/numbersgame', function () use ($app) {
    return $app['twig']->render('numbersgame/index.html.twig', array());
});

$app->get('/calender', function () use ($app) {
    return $app['twig']->render('calender/index.html.twig', array());
});

$app->get('/form-backend', function () use ($app) {
    return $app['twig']->render('forms/form-backend.html.twig', array());
});

$app->get('/c13', function () use ($app) {
    return $app['twig']->render('forms/c13.html.twig', array());
});

$app->get('/ingridients', function () use ($app) {
    return $app['twig']->render('ReactIngredients/ingredients.html.twig', array());
});

$app->get('/mobile', function () use ($app) {
    return $app['twig']->render('mobile/mobile-version.html.twig', array());
});

$app->get('/calculator', function () use ($app) {
    return $app['twig']->render('small-calculator/calculator.html.twig', array());
});

$app->get('/oughts-and-crosses', function () use ($app) {
    return $app['twig']->render('game-oc/oughts-and-crosses.html.twig', array());
});

$app->get('/online-shop', function () use ($app) {
    return $app['twig']->render('online-shop/shop.html.twig', array());
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
