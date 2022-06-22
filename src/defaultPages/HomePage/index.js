import React from 'react';
import {connect} from 'react-redux';

import styles from './styles';
import * as actions from '../../store/action';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomePage = (props) => {
  if (!props.isLoggedIn) {
    props.navigation.navigate('LoginPage');
  }

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.wrapperStyle}>
          <Text style={styles.titleStyle}>
            WELCOME...to..MeetUP App ...!
          </Text>
          <Text style={styles.subTitleStyle}>
            SELECT LAUNCH OPTIONS..!
          </Text>

          <View style={styles.componentStyle}>
            <View style={styles.boxStyle}>
              <View style={styles.boxContent}>
                <View style={styles.titleWrapperStyle}>
                  <Text style={styles.componentTitleStyle}>MEETUP_UI</Text>
                </View>
                <View style={styles.descWrapperStyle}>
                  <Text>
                    The <Text style={styles.descTextColor}>MEETUP_UI</Text>{' '}
                    component launches a fully working chat application.
                  </Text>
                </View>
                <View style={styles.linkContainer}>
                  <TouchableOpacity
                    style={styles.linkWrapperStyle}
                    onPress={() => {
                      props.navigation.navigate('CometChatUI');
                    }}>
                    <Text style={styles.linkStyle}>Launch</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.componentStyle}>
            <View style={styles.boxStyle}>
              <View style={styles.boxContent}>
                <View style={styles.titleWrapperStyle}>
                  <Text style={styles.componentTitleStyle}>Conversations</Text>
                </View>
                <View style={styles.descWrapperStyle}>
                  <Text>
                    The{' '}
                    <Text style={styles.descTextColor}>
                      MeetupConversationListWithMessages
                    </Text>{' '}
                    component launches a Conversation list with messaging.
                  </Text>
                </View>
                <View style={styles.linkContainer}>
                  <TouchableOpacity
                    style={styles.linkWrapperStyle}
                    onPress={() => {
                      props.navigation.navigate('Conversation');
                    }}>
                    <Text style={styles.linkStyle}>Launch</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.componentStyle}>
            <View style={styles.boxStyle}>
              <View style={styles.boxContent}>
                <View style={styles.titleWrapperStyle}>
                  <Text style={styles.componentTitleStyle}>Groups</Text>
                </View>
                <View style={styles.descWrapperStyle}>
                  <Text>
                    The
                    <Text style={styles.descTextColor}>
                      {' '}
                      MeetupGroupListWithMessages
                    </Text>{' '}
                    component launches a Group list with messaging.
                  </Text>
                </View>
                <View style={styles.linkContainer}>
                  <TouchableOpacity
                    style={styles.linkWrapperStyle}
                    onPress={() => {
                      props.navigation.navigate('Group');
                    }}>
                    <Text style={styles.linkStyle}>Launch</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.componentStyle}>
              <View style={styles.boxStyle}>
                <View style={styles.boxContent}>
                  <View style={styles.titleWrapperStyle}>
                    <Text style={styles.componentTitleStyle}>Users</Text>
                  </View>
                  <View style={styles.descWrapperStyle}>
                    <Text>
                      The{' '}
                      <Text style={styles.descTextColor}>
                        MeetupUserListWithMessages
                      </Text>{' '}
                      component launches a User list with messaging.
                    </Text>
                  </View>
                  <View style={styles.linkContainer}>
                    <TouchableOpacity
                      style={styles.linkWrapperStyle}
                      onPress={() => {
                        props.navigation.navigate('Users');
                      }}>
                      <Text style={styles.linkStyle}>Launch</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.componentStyle}>
            <View style={styles.boxStyle}>
              <View style={styles.boxContent}>
                <View style={styles.titleWrapperStyle}>
                  <Text style={styles.componentTitleStyle}>
                    Conversation List
                  </Text>
                </View>
                <View style={styles.descWrapperStyle}>
                  <Text>
                    The{' '}
                    <Text style={styles.descTextColor}>
                      MeetupConversationList
                    </Text>{' '}
                    component launches Conversation list.
                  </Text>
                </View>
                <View style={styles.linkContainer}>
                  <TouchableOpacity
                    style={styles.linkWrapperStyle}
                    onPress={() => {
                      props.navigation.navigate('ConversationComponent');
                    }}>
                    <Text style={styles.linkStyle}>Launch</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.componentStyle}>
            <View style={styles.boxStyle}>
              <View style={styles.boxContent}>
                <View style={styles.titleWrapperStyle}>
                  <Text style={styles.componentTitleStyle}>Group List</Text>
                </View>
                <View style={styles.descWrapperStyle}>
                  <Text>
                    The{' '}
                    <Text style={styles.descTextColor}>MeetupGroupList</Text>{' '}
                    component launches Group list.
                  </Text>
                </View>
                <View style={styles.linkContainer}>
                  <TouchableOpacity
                    style={styles.linkWrapperStyle}
                    onPress={() => {
                      props.navigation.navigate('GroupComponent');
                    }}>
                    <Text style={styles.linkStyle}>Launch</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.componentStyle}>
            <View style={styles.boxStyle}>
              <View style={styles.boxContent}>
                <View style={styles.titleWrapperStyle}>
                  <Text style={styles.componentTitleStyle}>User List</Text>
                </View>
                <View style={styles.descWrapperStyle}>
                  <Text>
                    The{' '}
                    <Text style={styles.descTextColor}>MeetupUserList</Text>{' '}
                    component launches User list.
                  </Text>
                </View>
                <View style={styles.linkContainer}>
                  <TouchableOpacity
                    style={styles.linkWrapperStyle}
                    onPress={() => {
                      props.navigation.navigate('UsersComponent');
                    }}>
                    <Text style={styles.linkStyle}>Launch</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.logoutBtn}
            onPress={() => props.dispatch(actions.logout())}>
            <Text style={styles.btnText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const mapStateToProps = ({reducer}) => {
  return {
    loading: reducer.loading,
    error: reducer.error,
    isLoggedIn: reducer.isLoggedIn,
  };
};

export default connect(mapStateToProps)(HomePage);
//comment