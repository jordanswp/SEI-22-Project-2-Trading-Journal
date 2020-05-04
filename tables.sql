CREATE TABLE IF NOT EXISTS trades (
      id SERIAL PRIMARY KEY,
      pair TEXT,
      date_traded TEXT,
      trend_direction TEXT,
      short_or_long TEXT,
      lot_size DECIMAL,
      entry_price DECIMAL,
      take_profit DECIMAL,
      stoploss_price DECIMAL,
      exit_price DECIMAL,
      profit_or_loss DECIMAL,
      comments TEXT
);


CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username TEXT,
      password TEXT
);