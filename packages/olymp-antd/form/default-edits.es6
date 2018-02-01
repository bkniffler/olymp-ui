import React from 'react';
import moment from 'moment';
import { Input, Switch, TimePicker, DatePicker } from 'antd';
import slate from './edit-slate';
import color from './edit-color';
import geocode from './edit-geocode';
import place from './edit-place';
/* import strings from './edit-strings';
import tags from './edit-tags';
import openings from './edit-openings';
import list from './edit-list';
import enu from './edit-enum';
import date from './edit-date';
import rel from './edit-rel';
import relList from './edit-rel-list';
import image from './edit-image';
import color from './edit-color';
import textarea from './edit-textarea';
import geocode from './edit-geocode';
import slug from './edit-slug'; */

export default {
  test: e => ({ id, ...p }) => (
    <div style={{ color: 'red' }}>
      {id} vom Typ {e} fehlt!
      <Input id={id} {...p} />
    </div>
  ),
  input: Input, // phone, url, email
  text: Input.TextArea,
  slate,
  geocode,
  place,
  color,
  bool: ({ value, ...p }) => <Switch checked={!!value} {...p} />,
  date: ({ value, onChange, ...p }) => (
    <DatePicker
      value={moment(value).startOf('day')}
      format="DD.MM.YYYY"
      onChange={(v, props) => onChange(v.format(), props)}
      style={{ width: '100%' }}
      {...p}
    />
  ),
  datetime: ({ value, onChange, ...p }) => (
    <DatePicker
      value={moment(value)}
      showTime
      format="DD.MM.YYYY"
      onChange={(v, props) => onChange(v.format(), props)}
      style={{ width: '100%' }}
      {...p}
    />
  ),
  time: ({ value, onChange, ...p }) => (
    <TimePicker
      value={moment(value).startOf('hour')}
      format="HH:mm"
      onChange={(v, props) => onChange(v.format(), props)}
      style={{ width: '100%' }}
      {...p}
    />
  ),
  week: ({ value, onChange, ...p }) => (
    <DatePicker.WeekPicker
      value={moment(value).startOf('week')}
      format="ww. / YYYY"
      onChange={(v, props) => onChange(v.format(), props)}
      style={{ width: '100%' }}
      {...p}
    />
  ),
  month: ({ value, onChange, ...p }) => (
    <DatePicker.MonthPicker
      value={moment(value).startOf('month')}
      format="MM / YYYY"
      onChange={(v, props) => onChange(v.format(), props)}
      style={{ width: '100%' }}
      {...p}
    />
  )
  // image: p => <EditImage maxHeight={100} maxWidth={250} {...p} />

  /* color,
  date,
  enum: enu,
  geocode,
  image, */
  /* list,
  openings,
  relList,
  rel,
  slug,
  strings,
  tags,
  textarea, */
};
