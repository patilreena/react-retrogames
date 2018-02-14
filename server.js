import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';

import Game from './app/models/game';
import { getGames, getGame, postGame, deleteGame } from './app/routes/game';
