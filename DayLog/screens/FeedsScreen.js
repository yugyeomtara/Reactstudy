import React, {useContext, useState} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import LogContext from '../context/LogContext';
import FloatingWriteButton from '../components/FloatingWriteButton';
import FeedList from '../components/FeedList';

function FeedsScreen() {
  const {logs} = useContext(LogContext);
  const [hidden, setHidden] = useState(false);

  const onScrolledToBottom = isBottom => {
    if (hidden !== isBottom) {
      setHidden(isBottom);
    }
  };

  return (
    <View style={styles.block}>
      <FeedList logs={logs} onScrolledToBottom={onScrolledToBottom} />
      <FloatingWriteButton hidden={hidden} />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1},
});

export default FeedsScreen;
