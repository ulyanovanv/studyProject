<?php namespace Controllers;

use Silex\Application;

/**
 * Created by PhpStorm.
 * User: ilya
 * Date: 18.08.17
 * Time: 17:25
 */
class ToDoController
{
    public function index(Application $app)
    {



        return $app['twig']->render('todo/index.html.twig', ['time' => date('d.m.Y H:i:s')]);
    }
}