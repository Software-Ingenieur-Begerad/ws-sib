/*
 * SPDX-FileCopyrightText: 2021 Software Ingenieur Begerad <swingbe.de>
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
module.exports = value => {
  const dateObject = new Date(value);

  return dateObject.toISOString();
};
