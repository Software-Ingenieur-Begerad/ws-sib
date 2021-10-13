/*
 * SPDX-FileCopyrightText: 2021 Software Ingenieur Begerad <swingb.de>
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
const moment = require('moment');

module.exports = value => {
  const dateObject = moment(value);
  return `${dateObject.format('Do')} of ${dateObject.format('MMMM YYYY')}`;
};
